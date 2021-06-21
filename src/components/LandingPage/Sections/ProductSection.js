import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import bbb from "assets/img/Bed-Bath-and-Beyond-logo.jpg";







const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
       {/* <h2 className={classes.title}>Our Registry</h2> */}
      
      <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550315894?eventType=Wedding"><img src={bbb} width="75%" className=""/></a>
      {/* <a src="">Our Registry</a> */}
      <a className="active" width="50%">


      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 39"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M123.303 23.864c.264 0 .727.05.727-.288 0-.218-.29-.258-.52-.258h-.566v.546h.36zm.995 1.276h-.359l-.636-.978h-.359v.978h-.298v-2.121h.926c.382 0 .756.105.756.561 0 .418-.294.573-.672.582l.642.978zm.727-1.048c0-.913-.763-1.639-1.653-1.639-.892 0-1.653.726-1.653 1.639 0 .914.761 1.639 1.653 1.639.89 0 1.653-.725 1.653-1.639zm-3.604 0a1.93 1.93 0 011.95-1.936 1.93 1.93 0 011.952 1.936 1.93 1.93 0 01-1.951 1.936 1.93 1.93 0 01-1.951-1.936zM104.35 34.115h.739c3.956 0 7-.81 7-2.718 0-2.045-2.653-2.912-7-2.912h-.74v5.63zM92.435 23.934h12.132c11.002 0 19.438 2.14 19.438 7.482 0 4.32-6.871 7.06-16.482 7.06H92.435V23.933zm-16.086.01H68.47v14.54h7.848v-7.397l6.95 7.397h7.85v-14.54h-7.85v7.536zm-24.47 7.376c0 1.658 1.625 2.795 3.951 2.795 2.327 0 3.95-1.137 3.95-2.795 0-1.543-1.511-2.835-3.95-2.835-2.437 0-3.951 1.292-3.951 2.835m15.638-.078c0 4.668-5.24 7.463-11.687 7.463-6.445 0-11.686-2.795-11.686-7.463 0-4.57 5.27-7.54 11.686-7.54 6.418 0 11.687 2.97 11.687 7.54"></path><path fill-rule="nonzero" d="M34.793 23.934l2.192 3.798h.21c.207-.462.389-.925.65-1.369l1.41-2.43h8.036l-6.732 8.273v6.269h-6.992v-6.269l-6.862-8.272h8.088zm-20.024 0h11.76v3.973H21.17v1.388h4.894v3.78H21.17v1.427h5.543v3.973H14.769zm-9.33 11.07h.658c.957 0 2.34-.02 2.34-1.216 0-1.214-1.488-1.195-2.424-1.195h-.574v2.41zm.531-5.478c.852 0 1.808-.076 1.808-1.08 0-1.08-1.085-1.003-1.935-1.003H5.44v2.083h.53zM.039 23.934h6.783c3.103 0 6.27.674 6.27 4.03 0 1.273-.702 2.526-2.104 2.931v.117c1.744.558 2.85 1.715 2.85 3.45 0 2.99-3.062 4.013-5.87 4.013H.039V23.934zm113.52-16.865c.972-.766 2.304-1.558 2.304-2.962 0-1.354-.974-2.094-2.254-2.094-1.15 0-2.15.817-2.15 2.042 0 .971.59 1.687 1.154 2.401l.638.818.308-.205zm-1.05 3.371c-1.33.92-3.506 2.221-3.506 4.06 0 1.839 1.74 3.55 3.583 3.55 1.792 0 3.225-1.353 4.428-2.554l-4.274-5.21-.23.154zm5.938 6.741c-1.46 1.712-3.507 3.014-5.784 3.014-3.224 0-5.913-2.349-5.913-5.669 0-2.452 1.536-3.78 3.38-5.107l1.203-.868c-1.1-1.15-2.125-2.58-2.125-4.215 0-2.655 1.92-4.212 4.453-4.212 2.355 0 4.453 1.48 4.453 4.009 0 2.17-1.894 3.626-3.506 4.8l4.018 4.852 2.253-2.605 1.535 1.583-2.355 2.759 3.456 4.265h-2.968l-2.1-2.606zm-20.39-8.886V.532h2.407v19.255h-2.406v-9.245h-9.189v9.245h-2.405V.532h2.406v7.763zM80.584 19.787h-2.406V2.728h-4.582V.532h11.568v2.196h-4.58z"></path><path d="M62.691 14.96l-2.2 4.826h-2.587L67.12-.286l9.214 20.072h-2.585l-2.201-4.827H62.69zm4.428-9.984l-3.43 7.787h6.86l-3.43-7.787z"></path><path fill-rule="nonzero" d="M49.23 17.641h1.844c2.227 0 4.554-.663 4.554-3.395 0-2.707-2.762-3.27-4.913-3.27H49.23v6.665zm0-8.58h.615c2.277 0 4.145-.46 4.145-3.218 0-2.707-1.842-3.165-4.095-3.165h-.665V9.06zM46.824.532h2.355c3.634 0 7.064.945 7.064 5.286 0 1.404-.768 3.038-2.073 3.652v.05c2.279.41 3.864 2.63 3.864 4.878 0 3.856-3.3 5.388-6.705 5.388h-4.505V.532zM27.639 17.591h.845c4.913 0 9.163-1.84 9.163-7.431 0-5.619-4.25-7.432-9.163-7.432h-.845V17.59zM25.233.533h3.993c5.912 0 10.827 3.115 10.827 9.524 0 6.563-4.812 9.73-10.904 9.73h-3.916V.532zm-12.617 0H22.98v2.195h-7.96v5.389h7.73v2.195h-7.73v7.279h7.96v2.196H12.615z"></path><path d="M0 .532h2.354c3.636 0 7.064.945 7.064 5.287 0 1.403-.768 3.037-2.072 3.65 2.278.46 3.864 2.682 3.864 4.929 0 3.856-3.302 5.388-6.706 5.388H0V.532zm2.406 17.11h1.842c2.227 0 4.557-.664 4.557-3.396 0-2.707-2.765-3.27-4.915-3.27H2.406v6.666zm0-8.58h.613c2.28 0 4.148-.46 4.148-3.22 0-2.705-1.844-3.164-4.095-3.164h-.666v6.384z"></path></g></svg> */}

      </a>



      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer> */}
      {/* </div> */}
    </div>
  );
}
