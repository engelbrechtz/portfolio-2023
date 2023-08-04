"use client";
import React from "react";
import Card from "@/components/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <section className="projects_container">
        <div>
          <article className="">
            <h1 className="text-slate-500 text-sm">PROJECTS & EXPERIENCE</h1>
          </article>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Card
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
                title="Netflix"
                text="using nextjs & typescript"
                link="test"
              />
              <Card
                image="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png"
                title="Starbucks"
                text="react / css"
                link="test"
              />
              <Card
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1&ipt=21cf3e508bea1b94b8768b54ea44f9599a2062130814219c2e2613017355d9f7&ipo=images"
                title="twitter"
                text="react / supabase"
                link="test"
              />
              <Card
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FPENj2dmMe5zvqf-GCykXgAAAA%26pid%3DApi&f=1&ipt=4feb8769abb12a839a420fa2c0ef83754429eda47176ac1d03040a882d9350d5&ipo=images"
                title="Countdown"
                text="react / supabase"
                link="test"
              />
              <Card
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F567%2F151%2Foriginal%2Fvector-pencil-icon.jpg&f=1&nofb=1&ipt=e277e1bafd74dea7da56297857f8424460a2c9c30e28a0d428f4561b59d326df&ipo=images"
                title="Blog"
                text="react / supabase"
                link="test"
              />
            </div>
          </motion.div>
        </div>
        <div className="relative top-20">
          <article className="">
            <h1 className="text-slate-500 text-sm">TOOLS & TECHNOLOGIES</h1>
          </article>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Card
                image="https://devicons.dev.br/icons?icon=React&theme=light"
                title="React"
                text="libaray for building frontend ui"
                link="https://react.dev/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=nextjs&theme=light"
                title="Next"
                text="Framework for building web applications"
                link="https://nextjs.org/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=tailwindcss&theme=light"
                title="Tailwind"
                text="libaray for building modern websites"
                link="https://tailwindcss.com/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=Php&theme=light"
                title="PHP"
                text="language for backend servers"
                link="https://www.php.net/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=prisma&theme=light"
                title="prisma"
                text="Tool for structuring databases"
                link="https://www.prisma.io/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=typescript&theme=light"
                title="Typescript"
                text="superset language "
                link="https://www.typescriptlang.org/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=graphql&theme=light"
                title="Graphql"
                text="Query language for API's"
                link="https://graphql.org/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=postgresql&theme=light"
                title="postgresql"
                text="database of choice"
                link="https://www.postgresql.org/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=nestjs&theme=light"
                title="Nest"
                text="something i'm learning, api framework"
                link="https://nestjs.com/"
              />
              <Card
                image="https://devicons.dev.br/icons?icon=flutter&theme=light"
                title="Flutter"
                text="For making mobile apps"
                link="https://flutter.dev/"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
