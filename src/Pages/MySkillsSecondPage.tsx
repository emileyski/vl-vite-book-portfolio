import NextPrevButton from "../Components/Buttons/NextPrevButton";
import Title from "../Components/Title";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";
import SkillsContent from "../Components/SkillsContent";
import SkillsBox from "../Components/SkillsBox";

import React from "react";

const protocols = [
  {
    name: "REST",
    img: "skill-icons/rest-api.svg",
  },
  {
    name: "GraphQL",
    icon: "bx bxl-graphql",
  },
  //   {
  //     name: "WebSockets",
  //     img: "skill-icons/brand-websocket-svgrepo-com.svg",
  //   },
  {
    name: "WebSockets",
    smallText: true,
    img: "skill-icons/socket-io-svgrepo-com.svg",
  },
  {
    name: "RabbitMQ",
    img: "skill-icons/rabbitmq-svgrepo-com.svg",
  },
  {
    name: "gRPC",
    bigIcon: true,
    img: "skill-icons/grpc-icon.svg",
  },
  {
    name: "Kafka",
    img: "skill-icons/kafka-icon-svgrepo-com.svg",
  },
];

const devops = [
  {
    name: "AWS",
    icon: "bx bxl-aws",
  },
  {
    name: "GCP",
    icon: "bx bxl-google-cloud",
  },
  {
    name: "Docker",
    icon: "bx bxl-docker",
  },
  {
    name: "Kubernetes",
    icon: "bx bxl-kubernetes",
  },
];

const design = [
  {
    name: "OOP",
    icon: "bx bx-code-alt",
  },
  {
    name: "SOLID",
    // icon: "bx bxs-book-content",
    img: "skill-icons/pattern-circles-svgrepo-com.svg",
  },
  {
    name: "Microservices",
    img: "skill-icons/microservices-1.svg",
    smallText: true,
  },
  {
    name: "Serverless",
    img: "skill-icons/serverless-svgrepo-com.svg",
  },
];

const MySkillsSecondPage = () => {
  const { isMobile } = useNotebook();

  return (
    <div>
      <Title>
        My Skills <i className="bx bxl-visual-studio"></i>
      </Title>
      <SkillsBox>
        <SkillsContent title={"Protocols"} skills={protocols} />

        <SkillsContent title={"DevOps"} skills={devops} />

        <SkillsContent title={"Design"} skills={design} />
      </SkillsBox>
      {isMobile && <NextPrevButton isNext={false} />}

      <NextPrevButton />
      <PageNumber number={3} />
    </div>
  );
};

export default MySkillsSecondPage;
