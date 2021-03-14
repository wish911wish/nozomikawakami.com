export interface GeometryArg {
  color: string
  args: [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ]
}

export interface RandomData {
  position: THREE.Vector3
  color: any
  scale: any
  rotation: any
}
