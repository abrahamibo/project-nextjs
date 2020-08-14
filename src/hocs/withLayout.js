import React, { Component } from "react"
import LayoutDefault from "../layouts/LayoutDefault/LayoutDefault";

const withLayout = (ComponentToWrap) => {
    class LayoutComponent extends Component {
        render() {
            // le component va render `ComponentToWrap`
            // mais il va y ajouter la prop `theme`, qu'il récupère du `context`
            return (
                <LayoutDefault>
                    <ComponentToWrap {...this.props}  />
                </LayoutDefault>
            )
        }
    }


    // on retourne notre wrapper
    return LayoutComponent
}
export default withLayout