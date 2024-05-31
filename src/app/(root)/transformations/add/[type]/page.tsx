import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "../../../../../constants/index";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransfomationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];
  let user = null;
  if (!userId) redirect("/sign-in");

  user = await getUserById(userId);
  //! Todo force to logout or delete record
  console.log("Imaginify Current User: ", user);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10 ml-2 mr-2">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransfomationTypePage;
