let student={
    sno:100,
    name:'jd',
    marks:[88,82,88],
    address:{
        city:'hyd',
        pincode:500088
    },
    getData:function(){
        console.log(this.sno);
        console.log('get data function');
    },getAverage:function(){
        s=0;
        for (v of this.marks){
            s+=v;
        }
        console.log("average : ",s/this.marks.length);
    }
}
student.getData()
student.getAverage()