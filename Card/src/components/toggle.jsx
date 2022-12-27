import  {useState} from 'react'

function Toggle(props){
  
    return(
     <div class="box">
        <input type="checkbox" name="toggle" class="checkbox" id="toggle" onClick={props.value} />
            <label class="label" for="toggle">
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
          <div class="circle"></div>
        </label>
      </div>
    )
}
export default Toggle