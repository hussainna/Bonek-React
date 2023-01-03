import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, withRouter , Link } from 'react-router-dom'
import swal from 'sweetalert';
import TopBar from '../../Topbar/TopBar';
import Sidebar from '../Sidebar';

function EditCategory(props) {

    useEffect(()=>{
        const category_id=props.match.params.id; 
        axios.get(`api/edit-category/${category_id}`).then(res=>{
            if(res.data.status===200)
            {
                setCategory({
                    name:res.data.category.name,
                    slug:res.data.category.slug,
                    title:res.data.category.title,
                    description:res.data.category.description,
                    meta_title:res.data.category.meta_title,
                    meta_keyword:res.data.category.meta_keyword,
                    meta_descrip:res.data.category.meta_descrip,
                    status:res.data.category.status,

                })
            }
        })       
    },[props.match.params.id]) 


    const [CategoryInput,setCategory]=useState({
        name:'',
        slug:'',
        description:'',
        title:'',

        meta_title:'',
        meta_descrip:'',
        meta_keyword:'',

        status:'',
    })

    const history=useHistory()

    const handleInput=(e)=>{
        e.persist()
        setCategory({...CategoryInput,[e.target.name]:e.target.value})
    }


        const updateCategory =(e)=>{
        e.preventDefault();
        const category_id=props.match.params.id; 

        const fromData=new FormData();
        fromData.append('name',CategoryInput.name);
        fromData.append('slug',CategoryInput.slug);
        fromData.append('description',CategoryInput.description);
        fromData.append('title',CategoryInput.title);
        fromData.append('meta_title',CategoryInput.meta_title);
        fromData.append('meta_descrip',CategoryInput.meta_descrip);
        fromData.append('meta_keyword',CategoryInput.meta_keyword);
        fromData.append('status',CategoryInput.status);

        console.log(fromData)


        axios.post(`api/update-category/${category_id}`,fromData).then(res=>{
            if(res.data.status===200)
            {
              swal('Success',res.data.message)
              history.push('/admin/category')
            }
        })
        
    }


return (
    <div>
              <div className='master'>
             <TopBar/>
             <div className="cont">
               <Sidebar/>
    
               <div className="card">
                 <div className="cardhead">
                 <h2 className='cardTitle S-flex'>Add Category
                     <Link>Back</Link>
                 </h2>
                 </div>
    
                 <div className="cardBody">
                 <form onSubmit={updateCategory}>
                     <div className="form-control">
                         <label>Name</label>
                         <input type="text" name="name" onChange={handleInput} value={CategoryInput.name}/>
                     </div>
                     <div className="form-control">
                         <label>Slug</label>
                         <input type="text" name="slug" onChange={handleInput} value={CategoryInput.slug} />
                     </div>
                     <div className="form-control">
                         <label>Title</label>
                         <input type="text" name="title" onChange={handleInput} value={CategoryInput.title}/>
                     </div>
                     <div className="form-control">
                         <label>Description</label><br />
                         <textarea type="text" name="description" onChange={handleInput} value={CategoryInput.description}/>
                     </div>
                     <div className="form-control">
                         <label>meta_title</label>
                         <input type="text" name="meta_title" onChange={handleInput} value={CategoryInput.meta_title}/>
                     </div>
                     <div className="form-control">
                         <label>meta_description</label>
                         <input type="text" name="meta_descrip" onChange={handleInput} value={CategoryInput.meta_descrip}/>
                     </div>
                     <div className="form-control">
                         <label>meta_keyword</label>
                         <input type="text" name="meta_keyword" onChange={handleInput} value={CategoryInput.meta_keyword}/>
                     </div>
                     
                     <div className="form-control">
                         <input type="checkbox" name="status" onChange={handleInput} value={CategoryInput.status}/>
                     </div>
                     <button>Submit</button>
                 </form>
                 </div>
    
               </div>
    
                
             </div>
         </div>
         </div>

    )




}

export default withRouter(EditCategory)