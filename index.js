var arr = [
    {dp: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-1/434686557_376693925345999_6597131949892266725_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sLAngjL5KNMAb4cAXFM&_nc_ht=scontent.fsyd3-1.fna&oh=00_AfAjLrGWx-BPSvRjnkuzuCyrfD_jx5AWOThlO6C_zYc2sA&oe=661FF020", story:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"}
]

var clutter = ""

arr.forEach(function(elem, ind){
    clutter += `<div class="story">
    <img src="${elem.dp}" alt="">
</div>`
})
document.querySelector("#storiyan").innerHTML = clutter;
