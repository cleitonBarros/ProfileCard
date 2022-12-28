export default function Toggle(props){
    return(
     <div class="box">
        <input type="checkbox" name="toggle" checked ={props.chk}class="checkbox" id="toggle" onClick={props.value} />
            <label class="label" for="toggle">
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
          <div class="circle"></div>
        </label>
      </div>
    )
}
