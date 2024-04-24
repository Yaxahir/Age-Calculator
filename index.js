function ok(params) {
            
    let input=document.querySelector('input').value
    // console.log(input)

    if (input=="") {
        alert('ENTER YOUR BIRTH DATE')
        return
    }

    let now=new Date() 

    let d1=now.getDate()
    let m1=now.getMonth()+1
    let y1=now.getFullYear()

    let yes=new Date(input)

    let d2=yes.getDate()
    let m2=yes.getMonth()+1
    let y2=yes.getFullYear()


    let d3=d1-d2
    let m3=m1-m2
    let y3=y1-y2

    let p=document.querySelector('p')

    p.innerHTML=`YOU ARE ${y3}YEAR'S , ${m3} MONTH AND ${d3} DAY'S OLD `

    input.value=0

    
  
  
}