import { publicApi } from "@/api/axiosConfig";
import { setCookie } from "@/components/cookies";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  userEmail: z
    .string()
    .email()
    .toLowerCase()
    .refine(async (email) => {
      try {
        const response = await publicApi.get(
          `/public/auth/duplicate-test/email?userEmail=${encodeURIComponent(
            email
          )}`
        );
        return response.data.duplicate;
      } catch (error) {
        console.error("Error checking email:", error);
        return false;
      }
    }, "아이디와 비밀번호를 확인해주세요."),
  userPassword: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH),

  // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function logIn(prevState: any, formData: FormData) {
  const data = {
    userEmail: formData.get("userEmail"),
    userPassword: formData.get("userPassword"),
  };
  const result = await formSchema.spa(data);
  let shouldRedirect = false;

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  }
  try {
    const res = await publicApi.post("/public/auth/login", data);

    if (res.data.success) {
      // 응답 헤더에서 Authorization 토큰을 추출하여 쿠키에 저장하는 부분은 응답 인터셉터에서 처리됨
      // 쿠키 설정 로직 작성
      const authorization = res.headers["authorization"];

      shouldRedirect = true;

      if (authorization && authorization.startsWith("Bearer ")) {
        const token = authorization.substring(7); // "Bearer " 이후의 토큰 부분 추출
        setCookie(token);
      }
    } else {
      console.error("API error:", res.data);
    }
  } catch (signupError) {
    console.error("Error during signup:", signupError);
  }
  if (shouldRedirect) {
    redirect("/");
  }
}
