/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const TechSupported = () => {
  const techLogos = [
    {
      id: 1,
      path: "/assets/logos/gitlab.svg",
    },
    {
      id: 2,
      path: "/assets/logos/github.svg",
    },
    {
      id: 3,
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 4,
      path: "/assets/logos/typescript.svg",
    },
    {
      id: 5,
      path: "/assets/logos/python.svg",
    },
    {
      id: 6,
      path: "/assets/logos/java.svg",
    },
    {
      id: 7,
      path: "/assets/logos/nodejs.svg",
    },
    {
      id: 8,
      path: "/assets/logos/php.svg",
    },
    {
      id: 9,
      path: "/assets/logos/ruby.svg",
    },
    {
      id: 10,
      path: "/assets/logos/c++.svg",
    },
    {
      id: 11,
      path: "/assets/logos/csharp.svg",
    },
    {
      id: 12,
      path: "/assets/logos/c-plain.svg",
    },
    {
      id: 13,
      path: "/assets/logos/go.svg",
    },
    {
      id: 14,
      path: "/assets/logos/scala.svg",
    },
    {
      id: 15,
      path: "/assets/logos/kotlin.svg",
    },
    {
      id: 16,
      path: "/assets/logos/swift.svg",
    },
    {
      id: 17,
      path: "/assets/logos/rust.svg",
    },
    {
      id: 18,
      path: "/assets/logos/react.svg",
    },
    {
      id: 19,
      path: "/assets/logos/vuejs.svg",
    },
    {
      id: 22,
      path: "/assets/logos/angular.svg",
    },
    {
      id: 23,
      path: "/assets/logos/terraform.svg",
    },
    {
      id: 24,
      path: "/assets/logos/spring.svg",
    },
    {
      id: 25,
      path: "/assets/logos/tomcat.svg",
    },
    {
      id: 26,
      path: "/assets/logos/laravel.svg",
    },
    {
      id: 27,
      path: "/assets/logos/symfony.svg",
    },
    {
      id: 28,
      path: "/assets/logos/nestjs.svg",
    },
    {
      id: 29,
      path: "/assets/logos/django.svg",
    },
    {
      id: 30,
      path: "/assets/logos/flask.svg",
    },
    {
      id: 31,
      path: "/assets/logos/fastapi.svg",
    },
    {
      id: 32,
      path: "/assets/logos/dotnetcore.svg",
    },
    {
      id: 33,
      path: "/assets/logos/dot-net.svg",
    },
    {
      id: 34,
      path: "/assets/logos/rails.svg",
    },
    {
      id: 35,
      path: "/assets/logos/flutter.svg",
    },
    {
      id: 36,
      path: "/assets/logos/nextjs.svg",
    },
    {
      id: 37,
      path: "/assets/logos/wordpress.svg",
    },
    {
      id: 38,
      path: "/assets/logos/drupal.svg",
    },
    {
      id: 39,
      path: "/assets/logos/kubernetes.svg",
    },
    {
      id: 40,
      path: "/assets/logos/docker.svg",
    },
    {
      id: 41,
      path: "/assets/logos/ansible.svg",
    },
  ];
  return (
    <section
      id="techs"
      className="relative z-50 lg:px-[130px] px-6  justify-center flex flex-col items-center  pt-[100px] pb-[145px] w-full"
    >
      <h2 className="text-[50px] text-center mb-7 leading-none">
        Scan the Whole stack
      </h2>
      <p className="text-black-primary text-[18px] font-normal text-center md:max-w-[55%] flex justify-center mb-[60px]">
        SekOps supports every stack and technology, providing thorough coverage
        and flexibility for your projects
      </p>

      <ul className="lg:flex justify-center items-center flex-wrap gap-2 w-full lg:max-w-[800px] grid  grid-cols-logos grid-rows-logos">
        {techLogos.map((logo) => {
          return (
            <li key={logo.id} className="flex-1 min-w-[50px]">
              <Image
                src={logo.path}
                width={46}
                alt={logo.path.split("/")[3]}
                height={46}
                quality={100}
              ></Image>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
