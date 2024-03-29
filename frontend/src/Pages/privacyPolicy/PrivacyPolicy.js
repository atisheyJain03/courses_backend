import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    margin: "auto",
    fontFamily: "Montserrat, sans-serif",
    color: "#576d96",
    letterSpacing: ".5px",
    wordSpacing: "2px",
    lineHeight: "1.3",
    fontSize: "16px",
    marginBottom: "50px",

    "& a": {
      fontFamily: "Montserrat, sans-serif",
      color: "#050a30",
    },
    "& h2,h3": {
      fontFamily: "Montserrat, sans-serif",
      color: "#050a30",
    },
  },
  media: {
    height: 140,
  },

  card: {
    textAlign: "-webkit-center",
  },
});

function PrivacyPolicy() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Privacy Policy</h2>
      <p>
        {" "}
        Your privacy is important to us. It is <strong>inQueue's</strong> policy
        to respect your privacy regarding any information we may collect from
        you across our website, <a href="https://www.inqueue.co.in">inQueue</a>,
        and other sites we own and operate.
      </p>
      <p>
        {" "}
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.{" "}
      </p>
      <p>
        {" "}
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorised access, disclosure, copying, use or modification.
      </p>
      <p>
        {" "}
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.{" "}
      </p>
      <p>
        {" "}
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.{" "}
      </p>
      <p>
        {" "}
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.{" "}
      </p>
      <p>
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.{" "}
      </p>
      <h2>
        <strong>Cookie Policy</strong> for <strong>inQueue</strong>{" "}
      </h2>
      <p>
        {" "}
        This is the Cookie Policy for <strong>inQueue</strong>, accessible from
        URL{" "}
      </p>
      <h3>What Are Cookies</h3>
      <p>
        {" "}
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. This page describes what information they
        gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored
        however this may downgrade or 'break' certain elements of the sites
        functionality.
      </p>
      <h3>How We Use Cookies</h3>
      <p>
        {" "}
        We use cookies for a variety of reasons detailed below. Unfortunately in
        most cases there are no industry standard options for disabling cookies
        without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are
        not sure whether you need them or not in case they are used to provide a
        service that you use.{" "}
      </p>
      <h3>Disabling Cookies</h3>
      <p>
        {" "}
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Be aware that
        disabling cookies will affect the functionality of this and many other
        websites that you visit. Disabling cookies will usually result in also
        disabling certain functionality and features of the this site. Therefore
        it is recommended that you do not disable cookies.{" "}
      </p>
      <h3>The Cookies We Set</h3>
      <ul>
        <li>
          Account related cookies <brm />
          If you create an account with us then we will use cookies for the
          management of the signup process and general administration. These
          cookies will usually be deleted when you log out however in some cases
          they may remain afterwards to remember your site preferences when
          logged out.
        </li>
        <li>
          Login related cookies <br />
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </li>
        <li>
          Email newsletters related cookies <br />
          This site offers newsletter or email subscription services and cookies
          may be used to remember if you are already registered and whether to
          show certain notifications which might only be valid to
          subscribed/unsubscribed users.
        </li>
        <li>
          Surveys related cookies <br />
          From time to time we offer user surveys and questionnaires to provide
          you with interesting insights, helpful tools, or to understand our
          user base more accurately. These surveys may use cookies to remember
          who has already taken part in a survey or to provide you with accurate
          results after you change pages.
        </li>

        <li>
          Site preferences cookies <br />
          In order to provide you with a great experience on this site we
          provide the functionality to set your preferences for how this site
          runs when you use it. In order to remember your preferences we need to
          set cookies so that this information can be called whenever you
          interact with a page is affected by your preferences.
        </li>
      </ul>
      <h3>Third Party Cookies</h3>
      <p>
        {" "}
        In some special cases we also use cookies provided by trusted third
        parties. The following section details which third party cookies you
        might encounter through this site.{" "}
      </p>
      <ul>
        <li>
          This site uses Google Analytics which is one of the most widespread
          and trusted analytics solution on the web for helping us to understand
          how you use the site and ways that we can improve your experience.
          These cookies may track things such as how long you spend on the site
          and the pages that you visit so we can continue to produce engaging
          content. For more information on Google Analytics cookies, see the
          official Google Analytics page.
          <li>
            Third party analytics are used to track and measure usage of this
            site so that we can continue to produce engaging content. These
            cookies may track things such as how long you spend on the site or
            pages you visit which helps us to understand how we can improve the
            site for you.
          </li>
          <li>
            From time to time we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.
          </li>
          <li>
            As we sell products it's important for us to understand statistics
            about how many of the visitors to our site actually make a purchase
            and as such this is the kind of data that these cookies will track.
            This is important to you as it means that we can accurately make
            business predictions that allow us to monitor our advertising and
            product costs to ensure the best possible price.
          </li>
        </li>
      </ul>
      <h2>More Information</h2>
      <p>
        {" "}
        Hopefully that has clarified things for you and as was previously
        mentioned if there is something that you aren't sure whether you need or
        not it's usually safer to leave cookies enabled in case it does interact
        with one of the features you use on our site.{" "}
      </p>
      <p>
        {" "}
        This policy is effective as of <strong>Jul</strong>{" "}
        <strong>2021</strong>.{" "}
      </p>
    </div>
  );
}

export default PrivacyPolicy;
