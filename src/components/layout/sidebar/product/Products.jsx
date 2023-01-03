import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TopBar from '../../Topbar/TopBar'
import Sidebar from '../Sidebar'
import { PacmanLoader } from 'react-spinners';
import swal from 'sweetalert'

function Products() {
    // const [CategoryItems,setCategory]=useState([])
    // const [Loading,setLoading]=useState(true)

    // const history=useHistory()

    // useEffect(()=>{

    //     axios.get('api/category').then(res=>{
    //         if(res.data.status===200)
    //         {
    //             setCategory(res.data.category)
    //         }
    //         setLoading(false)
    //     })

    // },[])

    // const DeleteCategory=(e,id)=>{
    //     e.preventDefault();
    //     axios.delete(`api/delete-category/${id}`).then(res=>{
    //         if(res.data.status===200)
    //         {
    //             swal('Success',res.data.message)
    //             history.push('/admin/category')
    //         }
    //     })
    // }

    // var viewHTML='';

    

    // if(Loading){
    //     return(
    //         <PacmanLoader className='loadingIcon' color="#36d7b7" />
    //     )
    // }
    // else{
    //     viewHTML=CategoryItems.map((item,idx)=>{
    //         return(
    //             <tr key={idx} className=''>
    //                 <td>{item.id}</td>
    //                 <td>{item.name}</td>
    //                 <td>{item.slug}</td>
    //                 <td>{item.description}</td>
    //                 <td><Link to={`/admin/edit-category/${item.id}`}>Edit</Link></td>
    //                 <td><button onClick={(e)=>DeleteCategory(e,item.id)}>Delete</button></td>


    //             </tr>
    //         )
    //     })
    // }

  return (
    <div>
        <div className='master'>
        <TopBar/>
        <div className="cont">
          <Sidebar/>
            <div className="card">
                <div className="cardhead">
                    <h2 className="cardTitle S-flex">
                        Products
                        <Link to='/admin/add-product'>Add Product</Link>
                    </h2>
                </div>
                <div className="cardBody">
                <table id="customers">
                   <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Description</th>
                      <th>Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                   </tr>
                   {/* {viewHTML} */}
                   </table>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Products