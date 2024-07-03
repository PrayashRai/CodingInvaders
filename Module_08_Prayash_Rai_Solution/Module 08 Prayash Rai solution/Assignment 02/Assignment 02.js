function findVolumeOfSphere (radius){
    const v = ((4/3)*3.14*radius**3) //v=volume, pi=3.14
    return  v.toFixed(1)
  }
  let radius = 3
  let volume = findVolumeOfSphere(radius)
  console.log(volume)