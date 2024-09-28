class Wheel{
    constructor(center, radius, colors){
        this.center=center;
        this.radius=radius;
        this.colors=colors;
    }
    draw(ctx, angle=Math.PI){
        const sliceCount=this.colors.length

        if(speed>0.0001){
            speed-=0.0001
        }else{
            speed=0
        }
        for(let i=0;i<sliceCount;i++){
        
            const startAngle=angle+Math.PI*2*(i/sliceCount)
            const endAngle=angle+Math.PI*2*((i+1)/sliceCount)
            ctx.beginPath()
            ctx.moveTo(this.center.x, this.center.y)
            ctx.arc(this.center.x, this.center.y, this.radius, startAngle, endAngle)
            ctx.fillStyle=this.colors[i]
            ctx.fill()

            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();

            // ctx.beginPath()
            // ctx.globalAlpha=1
            // ctx.lineWidth=3
            // ctx.arc(this.center.x, this.center.y, this.radius/2, 0, 2*Math.PI)
            // ctx.fillStyle='white'
            // ctx.fill()

            // ctx.stroke()
            // ctx.globalAlpha=1/(speed*30)


        }

        ctx.beginPath()
        ctx.lineWidth=3
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI)
        ctx.stroke()

        // ctx.beginPath()
        // ctx.globalAlpha=1
        // ctx.lineWidth=3
        // ctx.arc(this.center.x, this.center.y, this.radius/2, 0, 2*Math.PI)
        // ctx.fillStyle='white'
        // ctx.fill()
        // ctx.stroke()
        // ctx.globalAlpha=1/(speed*30)

    }
}

