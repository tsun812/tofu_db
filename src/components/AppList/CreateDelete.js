import React from 'react';
import {Link} from 'react-router-dom';

export default function CreateDelete() {
const create = <Link className='create' to="/app/create" style={{ textDecoration: 'none' }}>Create a New app</Link>
  return (
     <ul>{create}</ul> 
    )
    }
    
    
