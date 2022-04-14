import React from 'react'
import { Button,Grid} from 'semantic-ui-react'
function Main(props) {
    const{games,onAdd,onRemove,cart}=props
  return (
    <>
    <Grid >
        <Grid.Row style={{display:'flex',flexWrap:'wrap'}} >
    {games.map((game)=>{
          const check=cart.filter(x=>x.id===game.id)
          const hide= game.game_price==='Unavailable'
       return(  <>      
            
        <Grid.Row style={{width:'40%',boxSizing:'border-box',marginBottom:'20px'}}>
          
            {game.game_name}
            
           
            
            
            <Grid.Column style={{float:'right'}}>
                <Grid.Column> ${game.game_price!='Unavailable' ?parseFloat(game.game_price).toLocaleString('en'):(game.game_price)}</Grid.Column>
                
           
            {!check.length>0 && <Button disabled={hide==true}  style={{fontSize:'small',width:'100px',color:'white'}} onClick={() => { onAdd(game) } }>Add to Cart</Button>}
            {check.length>0 && <><Button onClick={() => { onAdd(game) } }>+</Button>
  <Button onClick={() => { onRemove(game) } }>-</Button></>}
            </Grid.Column>
            <Grid.Column>{game.description}</Grid.Column>
            
            </Grid.Row>
  
   </>)
})}
      </Grid.Row>
    </Grid> 
   
   
    </>
  )
}

export default Main
