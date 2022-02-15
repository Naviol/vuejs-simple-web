<template>
  <div class="home">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <img alt="Showcase logo" src="../assets/android-chrome-192x192.png" />
          <h1 class="display-1 text-bold">Showcase Web Application</h1>
        </div>
        <div class="row mt-5">
          <a
            href="https://github.com/hkuspace-pu/comp2001hk-assessment-2-htlo-plymouth"
          >
            <img src="../assets/GitHub-Mark-32px.png" />
          </a>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2>Original Dataset</h2>
        </div>
        <div class="row mt-3">
          <p>
            The data is collect from
            <b
              >Data Place Plymouth - Weekly issues by library from January
              2018</b
            >
          </p>
          <a
            href="https://plymouth.thedata.place/dataset/library-issues/resource/fbbb8deb-fffc-4483-86d6-c6313f318768"
            target="_blank"
            >Visit to original dataset
          </a>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2>Linked Data</h2>
          <div class="row mt-3">
            <p>
              Data from original dataset will expose as linked data by backend
              server.
            </p>
            <p>
              Backend server will convert data to <b>JSON-LD</b> format with
              served by <b>RESTful API</b>. The example data showed below:
            </p>
            <code
              >{ "@context": { "name": "https://schema.org/Place", "date":
              "https://schema.org/Date", "number": "https://schema.org/Number"
              }, "name": "Central Library", "date": "2018-01-01", "number": 2636
              }</code
            >
            <p>
              All the source code has been deployed to the cloud environment. It
              is possible to access the RESTful API by URL.<br /><br />
              Currently only the GET method is supported.
            </p>
            <a
              href="https://us-central1-hkuspace-comp2001hk.cloudfunctions.net/app/data"
              >RESTful API Endpoint
            </a>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2>Project Vision</h2>
          <p class="text-start">
            The vision of this project is creating a modern look web application
            to visualize data which was collected from
            <b>Data Place Plymouth</b>. The data format used in this web
            application is <b>JSON-LD</b>, which is not provided from
            <b>Data Place Plymouth</b>. The requirement of the project is to
            develop both the frontend and backend to walk through the whole
            cycle of web application development.
          </p>
          <p class="text-start">
            The programming language for the development is not required,
            therefore <b>JavaScript</b> was picked to develop this project by
            leveraging it rich frameworks and libraries can be applied to the
            project and backend data process.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  padding-top: 24px;
}
</style>