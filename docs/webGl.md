## WebGL
- `WebGL (Web Graphics Library)` is a JavaScript API for rendering 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is integrated into the browser, allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas. 
- It is designed to work with the HTML5 <canvas> element and is a powerful tool for creating interactive and high-performance graphics on the web.
  
### Key Features of WebGL:
- `Browser Integration`: WebGL is built into all modern browsers, including Chrome, Firefox, Safari, and Edge, which means it doesn't require any additional plug-ins or installations.

- `GPU Acceleration`: By leveraging the GPU (Graphics Processing Unit), WebGL can render complex scenes and animations efficiently, making it suitable for games, simulations, and other graphics-intensive applications.

- `Based on OpenGL ES`: WebGL is based on OpenGL ES (Open Graphics Library for Embedded Systems), which is a subset of the OpenGL specification designed for embedded devices like smartphones and tablets.

- `Cross-Platform`: WebGL applications can run on any device that has a compatible web browser, ensuring wide compatibility across different operating systems and hardware.

- `Shader Language`: WebGL uses GLSL (OpenGL Shading Language) for writing shaders, which are programs that run on the GPU to control the rendering pipeline.


| OpenGl                                          | WebGl                                              |
| ----------------------------------------------- | -------------------------------------------------- |
| Native applications on desktops and some mobile | Web browsers                                       |
| Full OpenGL API                                 | Subset of OpenGL ES 2.0/3.0                        |
| C/C++ and other bindings                        | JavaScript                                         |
| Requires installation of drivers/librarie       | Runs directly in the browser without plug-ins      |
| Games, simulations, CAD, professional graphics  | Interactive websites, online games, visualizations |
| Extensive support for advanced features         | Limited to what's supported by browsers            |


[REFERENCES]
- https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API