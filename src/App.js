import React,{useMemo, useState} from 'react'
import './App.css';
import Header from './components/Header';
import CartList from './components/CartList';
import Main from './components/Main';
import DATA from './components/DATA'
function App() {
  const games =useMemo(()=>DATA,[])
  const [cart,setCart]=useState([])
  
  const onAdd =(game)=>{
    const exist=cart.find((x)=>x.id===game.id)
    if(exist){
  
  setCart(
    cart.map((x)=>{
     return  x.id===game.id?{...exist,qty:exist.qty + 1}:x
    })
  )
  }
  else{
    setCart([...cart,{...game,qty:1}])
  }
  }
 
 
  const onRemove =(game)=>{
 
  const exist=cart.find((x)=>x.id===game.id)
  if(exist.qty===1){
  setCart(
     cart.filter((x)=>{
       return x.id!==game.id})
  )
  }
  else{
    setCart(
      cart.map((x)=>{
      return  x.id===game.id?{...exist,qty:exist.qty - 1}:x
      })
    )
  }
  }

  const removeItem=(game)=>{
    const exist=cart.find((x)=>x.id===game.id)
    setCart(
      cart.filter(_x=>_x.id!==exist.id)
    )
  }
  const clearCart=()=>{
    
    setCart([])
  }

  return (
   <div className='app'>
<Header />
<Main onAdd={onAdd} onRemove={onRemove}  games={games} cart={cart}/>
<CartList onAdd={onAdd} onRemove={onRemove} cart={cart} removeItem={removeItem} clearCart={clearCart}/>

   </div>
  );
}

export default App;
