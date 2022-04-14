import React from 'react'
import { Button,Grid,Table, TableCell,Menu,Icon,Label } from 'semantic-ui-react';

function CartList(props) {
  const {cart,onAdd,onRemove,removeItem,clearCart}=props;
  const price=cart.reduce((x,value)=>x + value.game_price*value.qty,0)
  const quantity=cart.reduce((x,value)=>x + value.qty,0)
  
  return (
    <><div className='cart'>
      {cart.map((item, index) => {
        
        return (<>
          <Table celled >
        <Table.Body>
      <Table.Row>
        <Table.Cell style={{width:'15%'}}></Table.Cell>
        <Table.Cell className='table-row' >
        <Button onClick={() => { removeItem(item); } }>x</Button>
        
        </Table.Cell>
        <Table.Cell className='table-row'>{item.game_name}</Table.Cell>
        <Table.Cell className='table-row'>{item.qty}x{parseFloat(item.game_price).toLocaleString()}</Table.Cell>
        <Table.Cell className='table-row'>{parseFloat(item.qty * item.game_price).toLocaleString()}</Table.Cell>
        <Table.Cell className='table-row'><Button onClick={() => onAdd(item, index)}>+</Button>
        <Button onClick={() => onRemove(item, index)}>-</Button></Table.Cell>
        <Table.Cell style={{width:'15%'}}></Table.Cell>
        
        
      </Table.Row>     
    </Table.Body>
  </Table>
 
         
        </>);
        
      })}
      
      
     <hr/>
     {cart.length>0 && <Table celled >
        <Table.Body>
      <Table.Row>
        <Table.Cell style={{width:'4%'}}></Table.Cell>
        <Table.Cell className='table-row' >
        
        </Table.Cell>
        <Table.Cell className='table-row' >
        
        </Table.Cell>
        <Table.Cell className='table-row'>Total</Table.Cell>
        <Table.Cell className='table-row'>{quantity} spaceships</Table.Cell>
        <Table.Cell className='table-row'>{price.toLocaleString()}</Table.Cell>
        <Table.Cell className='table-row'><Button style={{width:'100px',fontSize:'small',marginLeft:'25px',marginTop:'8px'}} onClick={clearCart}>Clear Cart</Button>
        </Table.Cell>
        <Table.Cell style={{width:'16%'}}></Table.Cell>
        
        
      </Table.Row>     
    </Table.Body>
  </Table>}

    
    </div></>
  )
}

export default CartList
