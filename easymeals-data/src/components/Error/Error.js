import React from 'react'
import swal from 'sweetalert'

function Error(props) {
    
    return <div>
        {swal({
            title: "Error",
            text: props.message || props ,
            icon: "warning",
            button: "OK"
        })}
    </div>
}

export default Error