# Dijkstra's Algorithm

Pseudo Code
1. When looking to visit a new vertex, we choose the vertex with the smallest known distance first.
1. Once we’ve moved to this vertex, we look at each of its neighbors.
1. For each neighboring vertex, we calculate the distance from the starting point by summing all the edges that lead from the start to the vertex in question.
1. If the new total distance to the vertex is less than the previous total, store the new, shorter distance for that vertex.

Essentially you need to track:
1. each vertex and its shortest distance to the start node
1. the vertices that have been visited
1. an object containing a value of each vertex and a key of the previous vertex we visited to get to that vertex
