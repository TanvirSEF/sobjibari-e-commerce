"use client";
import FormHeader from "@/components/backend/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import ImageInput from "@/components/Forminputs/ImageInput";
import SubmitButton from "@/components/Forminputs/Submitbtn";
import TextareaInput from "@/components/Forminputs/TextArea";
import TextInput from "@/components/Forminputs/TextInput";
import SelectInput from "@/components/Forminputs/SelectInput";
import AddTags from "@/components/Forminputs/AddTags";
import { generateSlug } from "@/lib/generateSlug";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
  ];
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price"
            name="productSalePrice"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
            className="w-full"
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Product Image"
          />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <AddTags setItems={setTags} items={tags} itemTitle="Tag"/>
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product Please Wait..."
        />
      </form>
    </div>
  );
}
