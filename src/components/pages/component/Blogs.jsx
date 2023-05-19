import React, { useState } from "react";
import Modal from "../component/Modal";

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleModalOpen = (question, answer) => {
    setSelectedQuestion(question);
    setSelectedAnswer(answer);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={() =>
            handleModalOpen(
              "Access Token and Refresh Token",
              "Access token and refresh token are used for authentication in client-server communication. An access token is a credential that is used to access protected resources, while a refresh token is used to obtain a new access token once the old one expires. The access token is usually short-lived, while the refresh token has a longer expiration period.\n\nOn the client-side, access tokens are typically stored in memory or local storage, while refresh tokens should be stored securely, such as in an HTTP-only cookie. This helps protect against cross-site scripting (XSS) attacks and reduces the risk of token leakage."
            )
          }
        >
          Read Answer
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          Compare SQL and NoSQL databases?
        </h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={() =>
            handleModalOpen(
              "SQL and NoSQL Databases",
              "SQL (Structured Query Language) databases are relational databases that store data in tables with predefined schemas. They use structured data and have support for transactions, which ensures data consistency.\n\nNoSQL (Not only SQL) databases, on the other hand, are non-relational databases that store data in various formats such as key-value pairs, documents, graphs, or wide-column stores. They offer flexibility, scalability, and high performance but may sacrifice some data consistency and transaction support.\n\nThe choice between SQL and NoSQL databases depends on the specific requirements of the application, such as the need for complex queries, scalability, data structure flexibility, and transaction support."
            )
          }
        >
          Read Answer
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          What is Express.js? What is Nest.js?
        </h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={() =>
            handleModalOpen(
              "Express.js and Nest.js",
              "Express.js is a popular Node.js framework for building web applications and APIs. It provides a minimalist and flexible approach to handle HTTP requests and routing. With Express.js, developers have the freedom to choose libraries and tools for various functionalities.\n\nNest.js, on the other hand, is a progressive and opinionated Node.js framework built on top of Express.js. It is designed to create scalable and efficient server-side applications. Nest.js uses TypeScript and follows the architectural patterns of Angular, making it suitable for building large-scale, enterprise-level applications. Nest.js provides features like dependency injection, decorators, modules, and a powerful CLI."
            )
          }
        >
          Read Answer
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={() =>
            handleModalOpen(
              "MongoDB Aggregate",
              "MongoDB's aggregation framework is a powerful feature that allows for advanced data processing and analysis. It enables users to perform complex operations on collections, such as filtering, grouping, joining, and transforming data.\n\nThe aggregation pipeline in MongoDB consists of stages that process documents as they pass through the pipeline. Each stage performs a specific operation on the input documents and passes the result to the next stage. Stages can include operations like `$match`, `$group`, `$sort`, `$project`, `$lookup`, and many more.\n\nUsing the aggregation framework, developers can perform data aggregation and analysis tasks in a highly efficient manner, providing insights and transforming data according to their requirements."
            )
          }
        >
          Read Answer
        </button>
      </div>

      {showModal && (
        <Modal onClose={handleModalClose}>
          <h2 className="text-xl font-semibold mb-2">{selectedQuestion}</h2>
          <p>{selectedAnswer}</p>
        </Modal>
      )}
    </div>
  );
};

export default Blogs;
