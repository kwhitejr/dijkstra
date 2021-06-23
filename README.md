// Pseudo Code
// 1. When looking to visit a new vertex, we choose the vertex with the smallest known distance first.
// 2. Once we’ve moved to this vertex, we look at each of its neighbors.
// 3. For each neighboring vertex, we calculate the distance from the starting point by summing all the edges that lead from the start to the vertex in question.
// 4. If the new total distance to the vertex is less than the previous total, we store the new, shorter distance for that vertex.

Essentially you need to track:
1. each vertex and its shortest distance to the start node
2. the vertices that have been visited
3. an object containing a value of each vertex and a key of the previous vertex we visited to get to that vertex
