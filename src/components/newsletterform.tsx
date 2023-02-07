import React from "react";

export default function NewsletterForm(): JSX.Element {
  return (
    <div className="container mx-auto md:w-1/2 w-full bg-primary py-4 px-5 text-secondary">
      <div className="pb-3 text-center text-2xl font-semibold ">
        Get Latest News
      </div>
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        erat luctus, venenatis tortor sit amet, aliquam ipsum. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed vel sapien suscipit felis porttitor aliquet at quis metus.{" "}
      </div>
      <div className="my-2 mt-6 rounded-full border border-solid border-secondary bg-tertiary py-2 ">
        <span className="pl-10">email form</span>
      </div>
      <div className="text-center text-xl font-medium"> OR </div>
      <div className="my-2 border border-solid rounded-full border-secondary bg-tertiary py-2">
        <span className="pl-10">mobile number</span>
      </div>
      <div className="ml-auto w-1/3 rounded-full mt-6 border border-solid border-secondary bg-tertiary py-3 text-center hover:bg-primary">
        signup
      </div>
    </div>
  );
}
