import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import { AiOutlineLike,AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
function Cards() {
  const [like, setLike] = React.useState(true);
  return (
    <> 
    
      <Card style={{backgroundColor:'#1e1e1e'}} className="border-0">
        <Card.Body >
            <Card.Text><Avatar
            alt="Remy Sharp"
            src={require('../../../images/snapFilter.jpg')}
            sx={{ width: 46, height: 46 }}
        /></Card.Text>
        </Card.Body>
        <Card.Img variant="top"  src={require('../../../images/cards.jpg')} onDoubleClick={()=>setLike(val=>!val)}/>
        <Card.Body style={{display:'flex',flexDirection:'row',justifyContent:'space-around',fontSize:'1.5rem'}}>
        <Card.Text onClick={()=>setLike(val=>!val)}>{like?<AiOutlineHeart></AiOutlineHeart>:<AiFillHeart style={{color:'#fe2400'}}></AiFillHeart>}</Card.Text>
        <Card.Text><FaRegCommentDots></FaRegCommentDots></Card.Text>
        <Card.Text><RiShareForwardLine></RiShareForwardLine></Card.Text>
        </Card.Body>
      </Card>
      
    </>
  );
}

export default Cards;