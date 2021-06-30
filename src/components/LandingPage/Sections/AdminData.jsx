import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";







const useStyles = makeStyles(styles);

export default function AdminData() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
       {/* <h2 className={classes.title}>Our Registry</h2> */}
      
       <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={20} md={20}>
              <h2 style={{color: "black"}}>
              Admin Page
              </h2>
            </GridItem>
            <GridItem xs={12} sm={20} md={20}>
           
                <h1 className="display-3 text-center">Projects</h1>
                <br></br>
                {/* <table className="shadow p-3 mb-5 bg-light rounded, table table-hover"> */}
                <table className="shadow p-3 mb-5 bg-light rounded, table" >
                    <thead className="bg-dark text-warning">      
                        <tr>
                            <th className="lead w-25 p-3 text-center">Guest Name</th>
                            <th className="lead w-25 p-3 text-center">Phone</th>
                            <th className="lead w-25 p-3 text-center"># of Guests</th>
                            <th className="lead w-25 p-3 text-center">Attending?</th>
                        </tr>
                    </thead>

                    
                      <tr className="table-secondary">
                          <td className="w-25 p-2 text-center align-middle">Enoch Strok</td>
                          <td className="w-25 p-2 text-center align-middle">2063560204</td>
                          <td className="w-25 p-2 text-center align-middle">2</td>
                          <td className="w-25 p-2 text-center align-middle">Yes</td>
                          
                      </tr>
                       
                     
                </table>
                {/* <table className="shadow p-3 mb-5 bg-light rounded, table" >
                    <thead className="bg-dark text-warning">      
                        <tr>
                            <th className="lead w-25 p-3 text-center">Project Name</th>
                            <th className="lead w-25 p-3 text-center">Status</th>
                            <th className="lead w-25 p-3 text-center">Progress %</th>
                            <th className="lead w-25 p-3 text-center"></th>
                        </tr>
                    </thead>

                    
                      <tr key={idx}  className="table-secondary" data-bs-toggle="collapse" href={`#collapseExample${idx}`} onClick={editProjectFields} aria-expanded="false" aria-controls={`collapseExample2`}>
                          <td className="w-25 p-2 text-center align-middle">{data.projectName}</td>
                          <td className="w-25 p-2 text-center align-middle">{data.projectStatus}</td>
                          <td className="w-25 p-2 text-center align-middle">{data.progress}%</td>
                          <td className="w-25 p-2 text-center align-middle"></td>
                          
                      </tr>
                      <tr>
                          <td colspan="4" style={{padding: ".1rem"}}>
                              <div key={idx} className="collapse" id={`collapseExample${idx}`}>
                                  <SubProjectList projectId={data._id} projectList={projectList} trigger={trigger} setTrigger={setTrigger} inputList={projectDetailsInputList} setInputList={setProjectDetailsInputList} />
                              </div>
                          </td>
                      </tr>                          
                     
                </table> */}
            
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
