var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    follower = select('.follower'),
    testTubeGroup = select('.testTubeGroup'),
    testTubeLiquid = select('.testTubeLiquid'),
    popGroup = select('.popGroup'),
    dragger = select('.dragger'),
    dragLabel = select('.dragLabel'),
    bubbleContainer = select('.bubbleContainer'),
    singleBubble = select('.singleBubble'),
    valueBubble = select('.valueBubble'),
    myDragger,
    numBubbles = 2,
    maxDrag = 500,
    step = maxDrag/9,
    dragCount = 0,
    dragId = 0,
    oldDragId = -1,
    followerVX = 0,
    liquidSpeed = 0,
     friction = 0.59,
     spring = 0.1
  

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set([valueBubble, singleBubble], {
 transformOrigin:'50% 50%'
})

TweenMax.set(testTubeLiquid, {
 transformOrigin:'50% 0%'
})

TweenMax.set(testTubeGroup, {
 transformOrigin:'50% 10%'
})

function init(){
 
 myDragger = Draggable.create(dragger, {
  type:'x, y',
  bounds:{minX:0, maxX:maxDrag, minY:10, maxY:10},
  onDrag:createBubbleCloud,
  onThrowUpdate:createBubbleCloud,
  throwProps:true,
  overshootTolerance:0
/*   snap:function(value){
   return Math.round(value / step) * step;
  } */
 })
 
TweenMax.to(follower, 1, {
 x:'+=0',
 repeat:-1,
 modifiers:{
  x:function(x, target){   
   followerVX += (dragger._gsTransform.x - follower._gsTransform.x) * 0.3;
   followerVX *= 0.9;
   return follower._gsTransform.x + followerVX;    
  }
 }
})

TweenMax.to(testTubeLiquid, 1, {
 rotation:'+=0',
 repeat:-1,
 modifiers:{
 rotation:function(rotation, target){
   return rotation+followerVX*0.5
   
 }
 }
})
 
 TweenMax.from(dragger, 2, {
  x:maxDrag,
  ease:Power1.easeInOut,
  onUpdate:createBubbleCloud
 })
 
}

function createBubbleCloud(){
dragCount++; 
 var i = numBubbles, clone, tweenDuration, id, originX, originY, tl;
 
 dragId = Math.round(dragger._gsTransform.x/step)+1;
 dragLabel.textContent = dragId;

 originX = randomBetween(-50, 50);
 originY = randomBetween(-50, 50)
 
 while(--i > -1){
  clone = (i > 0) ? singleBubble.cloneNode(true) : valueBubble.cloneNode(true);
  
  bubbleContainer.appendChild(clone);
  tweenDuration = (i > 0) ? randomBetween(5,30)/10 : 1;
  if(i > 0){
   tl = new TimelineMax();
   tl.fromTo(clone, tweenDuration , {
    attr:{
     r:tweenDuration*2.7
    },
    x:dragger._gsTransform.x+6,
    y:randomBetween(dragger._gsTransform.y+10, dragger._gsTransform.y - 45) ,
    alpha:randomBetween(1, 10)/10,
    transformOrigin:originX + '%,' + originY+'%',
    rotation:0
   },{
    rotation:randomBetween(12, 120),
    x:randomBetween(dragger._gsTransform.x - 25, dragger._gsTransform.x + 25),
    y:randomBetween(-60, -150),
    ease:Expo.easeOut
   })
   .to(clone, tweenDuration/3, {
    alpha:0,
    attr:{
     r:0
    },
    ease:Expo.easeIn,
    onComplete:removeClone,
    onCompleteParams:[clone]
   },'-='+tweenDuration)
   

   
  } else {
   if(dragCount%15){ removeClone(clone); return};
   //Main bubble
   clone.querySelector('.label').textContent = dragId;
   tl = new TimelineMax({ onComplete:removeClone,
    onCompleteParams:[clone, true]});
   tl.from(clone, 2,{
    scaleY:0,
    ease:Elastic.easeOut.config(0.9,0.3)
   })
.from(clone, 2,{
    scaleX:0,
    ease:Elastic.easeOut.config(0.7,0.3)
   },'-=2')
   .fromTo(clone, 2.2, {
    x:randomBetween(dragger._gsTransform.x - 6, dragger._gsTransform.x + 6),
    y:randomBetween(-30, dragger._gsTransform.y - 60)
   },{
    x:dragger._gsTransform.x,
    y:randomBetween(-30, -120),
    ease:Linear.easeNone
   },'-=2')

  }
  
 }
 
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}  


function removeClone(clone, willpop){
 clone.parentNode.removeChild(clone);
 
 var pop, tl;
 if(willpop){
  pop = popGroup.cloneNode(true);
  bubbleContainer.appendChild(pop);
 //console.log(pop.querySelectorAll('line'))
  tl = new TimelineMax({onComplete:removeClone, onCompleteParams:[pop]}).timeScale(3.6);
   tl.set(pop, {
    x:clone._gsTransform.x+150 - 37,
    y:clone._gsTransform.y + 270 - 37
   })
   .fromTo(pop.querySelectorAll('line'),0.4, {
    drawSVG:'30% 30%'
  },{
    drawSVG:'60% 80%',
    ease:Linear.easeNone    
   })
  .to(pop.querySelectorAll('line'), 1, {
    drawSVG:'100% 100%'
   })
 } 
}
init()