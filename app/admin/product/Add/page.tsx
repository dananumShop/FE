"use client";

import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Input from "@/app/auth/components/input";
import Button from "@/app/auth/components/button";
import { uploadProduct } from "./actions";

export default function AddProduct() {
  const [detailImgPreviews, setDetailImgPreviews] = useState<string[]>([]);
  const [informationImgPreviews, setInformationImgPreviews] = useState<
    string[]
  >([]);
  const [detailImgFiles, setDetailImgFiles] = useState<File[]>([]);
  const [informationImgFiles, setInformationImgFiles] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("CLOTH");

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "detail" | "information"
  ) => {
    const {
      target: { files },
    } = event;

    if (!files) {
      return;
    }

    const newFiles = Array.from(files);
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

    if (type === "detail") {
      setDetailImgFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setDetailImgPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    } else {
      setInformationImgFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setInformationImgPreviews((prevPreviews) => [
        ...prevPreviews,
        ...newPreviews,
      ]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    detailImgFiles.forEach((file) => {
      formData.append("productDetailImgs", file);
    });

    informationImgFiles.forEach((file) => {
      formData.append("productInformationImgs", file);
    });

    const form = event.currentTarget;
    const productName = (
      form.elements.namedItem("productName") as HTMLInputElement
    ).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    const metadata = JSON.stringify({
      productName,
      price,
      description,
      category,
    });

    formData.append("metadata", metadata); // JSON 데이터 추가

    await uploadProduct(formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="p-5 flex flex-col gap-5 items-center"
      >
        <div className="flex">
          <label
            htmlFor="productDetailImg"
            className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover w-96"
            style={{
              backgroundImage:
                detailImgPreviews.length > 0
                  ? `url(${detailImgPreviews[0]})`
                  : undefined,
            }}
          >
            {detailImgPreviews.length === 0 ? (
              <>
                <PhotoIcon className="w-20" />
                <div className="text-neutral-400 text-sm">
                  제품 상세 이미지를 추가해주세요.
                </div>
              </>
            ) : null}
          </label>
          <input
            onChange={(event) => handleImageChange(event, "detail")}
            type="file"
            id="productDetailImg"
            name="productDetailImg"
            accept="image/*"
            className="hidden"
            multiple
          />

          {detailImgPreviews.map((preview, index) => (
            <img
              key={`detail-${index}`}
              src={preview}
              alt={`Detail Preview ${index}`}
              className="w-20 h-20 object-cover rounded-md border"
            />
          ))}
        </div>
        <div className="flex">
          <label
            htmlFor="productInformationImg"
            className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover w-96"
            style={{
              backgroundImage:
                informationImgPreviews.length > 0
                  ? `url(${informationImgPreviews[0]})`
                  : undefined,
            }}
          >
            {informationImgPreviews.length === 0 ? (
              <>
                <PhotoIcon className="w-20" />
                <div className="text-neutral-400 text-sm">
                  제품 정보 이미지를 추가해주세요.
                </div>
              </>
            ) : null}
          </label>

          <input
            onChange={(event) => handleImageChange(event, "information")}
            type="file"
            id="productInformationImg"
            name="productInformationImg"
            accept="image/*"
            className="hidden"
            multiple
          />

          {informationImgPreviews.map((preview, index) => (
            <img
              key={`information-${index}`}
              src={preview}
              alt={`Information Preview ${index}`}
              className="w-20 h-20 object-cover rounded-md border"
            />
          ))}
        </div>
        <div className="w-96">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            카테고리
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="CLOTH">CLOTH</option>
            <option value="BEDDING">BEDDING</option>
          </select>
        </div>
        <Input name="productName" required placeholder="제목" type="text" />
        <Input name="price" type="number" required placeholder="가격" />
        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />
        <div className="w-60">
          <Button text="작성 완료" />
        </div>
      </form>
    </div>
  );
}
