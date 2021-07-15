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

function TermAndCondition() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>1.Terms of Service</h2> <h3>1. Terms</h3>{" "}
      <p>
        By accessing the website at{" "}
        <a href="https://www.inqueue.co.in">inQueue</a> you are agreeing to be
        bound by these terms of service, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable
        local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site. The materials contained in
        this website are protected by applicable copyright and trademark law.
      </p>{" "}
      <h3>2. Disclaimer</h3>{" "}
      <ol>
        {" "}
        <li>
          1. The materials on inQueue's website are provided on an 'as is'
          basis. inQueue makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </li>{" "}
        <li>
          2. Further, inQueue does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </li>{" "}
      </ol>{" "}
      <h3>3. Limitations</h3>{" "}
      <p>
        In no event shall inQueue or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on inQueue's website, even if inQueue or a inQueue
        authorised representative has been notified orally or in writing of the
        possibility of such damage. Because some jurisdictions do not allow
        limitations on implied warranties, or limitations of liability for
        consequential or incidental damages, these limitations may not apply to
        you.
      </p>{" "}
      <h3>4. Accuracy of materials</h3>{" "}
      <p>
        The materials appearing on inQueue's website could include technical,
        typographical, or photographic errors. inQueue does not warrant that any
        of the materials on its website are accurate, complete or current.
        inQueue may make changes to the materials contained on its website at
        any time without notice. However inQueue does not make any commitment to
        update the materials.
      </p>{" "}
      <h3>5. Links</h3>{" "}
      <p>
        inQueue has not reviewed all of the sites linked to its website and is
        not responsible for the contents of any such linked site. The inclusion
        of any link does not imply endorsement by inQueue of the site. Use of
        any such linked website is at the user's own risk.
      </p>{" "}
      <h3>6. Modifications</h3>{" "}
      <p>
        inQueue may revise these terms of service for its website at any time
        without notice. By using this website you are agreeing to be bound by
        the then current version of these terms of service.
      </p>{" "}
      <h3>7. Governing Law</h3>{" "}
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of inQueue and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </div>
  );
}

export default TermAndCondition;
