import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class BootCamp extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>
                        {this.props.startDayMonthYear} -
                        {this.props.endDayMonthYear}
                    </p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ margin: "0px" }}>{this.props.colledgeName}</h4>
                    <p>{this.props.coursesDescription}</p>
                </Cell>
            </Grid>
        );
    }
}
export default BootCamp;
