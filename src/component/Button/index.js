import myAlert from "~/myAlert"
// import myAlert from "../../myAlert" khi chưa cài đặt thằng babel-plugin-module-resolver
function Button(){
    return(
        <button onClick={myAlert} >Click me!</button>
    )
}
export default Button