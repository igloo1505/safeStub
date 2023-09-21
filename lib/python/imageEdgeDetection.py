import numpy as np
from pixels2svg import pixels2svg

print(f"""pixels2svg: {pixels2svg}""")
imagepath = "/Users/bigsexy/Downloads/packers.jpeg"

pixels2svg(
    imagepath,
    "/Users/bigsexy/Desktop/currentProjects/paidWork/safe-stub/lib/python/output.svg",
)


# import potrace
# import cv2

# img = cv2.imread(imagepath)
# imgray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# ret, thresh = cv2.threshold(imgray, 127, 255, 0)
# im2, contours, hierarchy = cv2.findContours(
#     thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE
# )

# cv2.drawContours(img, contours, -1, (0, 255, 0), 3)


# # Make a numpy array with a rectangle in the middle
# data = np.zeros((32, 32), np.uint32)
# data[8 : 32 - 8, 8 : 32 - 8] = 1

# # TODO: Create a numpy array from an image using pillow here

# # Create a bitmap from the array
# bmp = potrace.Bitmap(data)

# # Trace the bitmap to a path
# path = bmp.trace()

# # Iterate over path curves
# for curve in path:
#     print("start_point =", curve.start_point)
#     for segment in curve:
#         print(segment)
#         end_point_x, end_point_y = segment.end_point
#         if segment.is_corner:
#             c_x, c_y = segment.c
#         else:
#             c1_x, c1_y = segment.c1
#             c2_x, c2_y = segment.c2
