import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "../../../../../constants/index";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransfomationTypePage = ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10 ml-2 mr-2">
        <TransformationForm
          action="Add"
          userId="{user._id}"
          type={transformation.type as TransformationTypeKey}
          creditBalance={0}
        />
      </section>
    </>
  );
};

export default AddTransfomationTypePage;
