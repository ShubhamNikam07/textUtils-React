import React from "react";
 function Alert(props)
{
  const capitalize=(word1)=>{
    const abc=word1.toLowerCase();
    return abc.charAt(0)+abc.slice(1);
  }
    return(
      props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.alert.type)}:{props.alert.msg}
 </div>
    )
}
export default Alert;