import React from "react";
import Card from "../../../components/Card";

const page = () => {
  return (
    <>
      <main>
        <section className="about_container w-full h-[40vh]">
          <div className="title_container text-center w-[900px] m-auto relative top-40 justify-center text-center">
            <h1 className="title_name text-center font-sans font-bold text-4xl leading-[50px]">
              Hi, I'm Declan - A software engineer with a{" "}
              <span className="bg-yellow-900 text-white border-b-2 border-yellow-300">
                passion
              </span>{" "}
              in{" "}
              <span className="bg-pink-900 text-white border-b-2 border-pink-300">
                business
              </span>{" "}
              &{" "}
              <span className="bg-blue-900 text-white border-b-2 border-blue-300">
                technology
              </span>{" "}
            </h1>
          </div>
        </section>

        <section className="card_section_container">
          <article>
            <div>
                <h3 className="">test</h3>
                <hr className="border-gray-900"/>
            </div>
            <div>
              <Card title="React" text="Framework for building ui" link="" />
              <Card
                title="Nextjs"
                text="Framework for building web applications"
                link=""
              />
              <Card
                title="Typescript"
                text="A better javascript language"
                link=""
              />
              <Card
                title="Tailwind"
                text="CSS first utility framework for building modern websites "
                link=""
              />
              <Card title="SASS" text="css pre-processor language" link="" />
              <Card
                title="Framer motion"
                text="ui library for animating ui"
                link=""
              />
              <Card
                title="flowbite"
                text="ui library for building interfaces"
                link=""
              />
              <Card title="Graphql" text="query  language for APIs" link="" />
              <Card
                title="Linear"
                text="Linear – A better way to build products"
                link=""
              />
              <Card title="vscode" text="for writting code" link="" />
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default page;
