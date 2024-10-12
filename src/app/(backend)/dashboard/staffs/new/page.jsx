"use client";
import FormHeader from "@/components/backend/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import SubmitButton from "@/components/Forminputs/Submitbtn";
import TextInput from "@/components/Forminputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NewStaffs() {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/staffs", data, "Staffs", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Staffs" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Password"
            name="password"
            register={register}
            type="password"
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Phone Number"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Present Address"
            name="presentAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Staff"
          loadingButtonTitle="Creating Staff Please Wait..."
        />
      </form>
    </div>
  );
}
