import React from 'react';
import { useEffect } from 'react';

const Blog = () => {

   useEffect(() => {
     document.title = "Asphalt |  Blog"; // Set the new title here
   }, []);
  return (
    <>
      <h1 className="text-center text-blue-500 text-3xl font-serif font-bold mt-9">
        My Blog
      </h1>
      <hr />

      <div className="w-[95%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="first py-5 px-5 font-serif border shadow-xl">
          <h1 className="text-2xl font-serif font-bold text-blue-500">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <hr />
          <p className="mt-3">
            A refresh token is a special key that enables a client for an API or
            service to retrieve new access tokens without requiring the user to
            perform a complete login. In other words, an application can
            exchange a valid refresh token for a new access token. In addition
            to the new access token, the service may return a new refresh token
            too. <br />
            Stage 1: Login The first stage involves the user logging in to an
            API service. This could be done by sending an HTTP request with a
            username and password. Then, on successful authentication, the API
            returns an access token (for example, a JWT).
            <br />
            Stage 1: Login The first stage involves the user logging in to an
            API service. This could be done by sending an HTTP request with a
            username and password. Then, on successful authentication, the API
            returns an access token (for example, a JWT).
            <br />
            In Stage 1 above, I mentioned that the access token will expire
            after five minutes. So, in order to retrieve a new token after that
            happens without repeating Stage 1, you can send a request to another
            endpoint to renew the access token.
          </p>
        </div>

        <div className="first py-5 px-5 font-serif border shadow-xl">
          <h1 className="text-2xl font-serif font-bold text-blue-500">
            Compare SQL and NoSQL databases?
          </h1>
          <hr />
          <p className="mt-3">
            What is SQL? SQL is a domain-specific language used to query and
            manage data. It works by allowing users to query, insert, delete,
            and update records in relational databases. SQL also allows for
            complex logic to be applied through the use of transactions and
            embedded procedures such as stored functions or views. <br />
            What is NoSQL? NoSQL stands for Not only SQL. It is a type of
            database that uses non-relational data structures, such as
            documents, graph databases, and key-value stores to store and
            retrieve data. NoSQL systems are designed to be more flexible than
            traditional relational databases and can scale up or down easily to
            accommodate changes in usage or load. This makes them ideal for use
            in applications
          </p>
        </div>

        <div className="first py-5 px-5 font-serif border shadow-xl">
          <h1 className="text-2xl font-serif font-bold text-blue-500">
            What is express js? What is Nest JS
          </h1>
          <hr />
          <p className="mt-3">
            What is NestJS? NestJS is a progressive Node.js framework for
            building efficient, scalable, and reliable server-side applications.
            It is built on top of Express.js and provides a more structured way
            of building applications with TypeScript. NestJS uses a modular
            architecture, making it easy to maintain and scale applications as
            they grow.
            <br />
            What is Express? Express is a minimal and flexible Node.js framework
            that provides a robust set of features for building web and mobile
            applications. It is a lightweight and opinionated framework that
            allows developers to create applications with their preferred tools
            and libraries. Express is popular among developers due to its
            simplicity and ease of use.
          </p>
        </div>
        <div className="first py-5 px-5 font-serif border shadow-xl">
          <h1 className="text-2xl font-serif font-bold text-blue-500">
            What is MongoDB aggregate and how does it work
          </h1>
          <hr />
          <p className="mt-3">
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline. One of the most
            common use cases of Aggregation is to calculate aggregate values for
            groups of documents. This is similar to the basic aggregation
            available in SQL with the GROUP BY clause and COUNT, SUM and AVG
            functions. MongoDB Aggregation goes further though and can also
            perform relational-like joins, reshape documents, create new and
            update existing collections, and so on. While there are other
            methods of obtaining aggregate data in MongoDB, the aggregation
            framework is the recommended approach for most work. There are what
            are called single purpose methods like estimatedDocumentCount(),
            count(), and distinct() which are appended to a find() query making
            them quick to use but limited in scope. The map-reduce framework on
            MongoDB is a predecessor of the aggregation framework and much more
            complex to use. MongoDB have deprecated
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;