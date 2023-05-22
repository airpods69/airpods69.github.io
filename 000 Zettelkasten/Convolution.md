Image modifier 

For 2D images (without color):
$$input\_image\_length = N$$
$$filter\_length = K$$
$$output\_length = N - K + 1$$

same formula with padding and stride would look like
$$N = \lfloor \frac{M + 2p - K}{S} + 1 \rfloor$$

For pooling,
$$N_{new} = N/2$$