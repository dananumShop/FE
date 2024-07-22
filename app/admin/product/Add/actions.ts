import { privateApi } from "@/api/axiosConfig";

export async function uploadProduct(formData: FormData) {
  try {
    // FormData에서 JSON 문자열 추출
    const productInformationStr = formData.get("productInformation") as string;
    const productInformation = JSON.parse(productInformationStr);

    // JSON 데이터에서 추출
    const title = productInformation.title;
    const price = productInformation.price;
    const description = productInformation.description;
    const category = productInformation.category;

    // 이미지 파일 추출
    const productDetailImgs = formData.getAll("productDetailImgs") as File[];
    const productInformationImgs = formData.getAll(
      "productInformationImgs"
    ) as File[];

    // 이미지 파일 정보를 배열로 출력
    const productDetailImg = productDetailImgs.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    const productInformationImg = productInformationImgs.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    const data = {
      productInformationImg,
      productDetailImg,
      productInformation,
    };
    console.log(data);

    // API 요청
    const response = await privateApi.post("/admin/product/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading product:", error);
    throw error; // 에러를 호출한 측으로 전달
  }
}
