tag: #mos 
- Small positive voltage is applied at gate.
	- Oxide field directed towards **Substrate**.
	- Majority Carriers(Holes) repelled into the substrate. Negatively charged acceptor ions are left behind (Depletion Region).
	- Energy bands bend downward near the surface.

![[Depletion Mode MOS 2023-03-23 00.21.25.excalidraw)

## Derivation of depth of depletion region #important 
 
$dQ = -q.N_A.dx$
$d\phi_s = -x \frac{dQ}{\epsilon_{Si}} = \frac{-q.N_A.x.dx}{\epsilon_{Si}}$
$\int_{\phi_F}^{\phi_S} d\phi_S = \int_{0}^{x_d} \frac{-q.N_A.x.dx}{\epsilon_{Si}}$
$\int_{\phi_F}^{\phi_S} d\phi_S = \frac{-q.N_A}{\epsilon_{Si}} \int_{0}^{x_d} x.dx$

On solving this for x<sub>d</sub>, we get
$x_d = \sqrt{\frac{2 \epsilon_{Si}.\left| \phi_S - \phi_F \right|} {q.N_A}}$ and $Q = -q.N_A.x_d = \sqrt{2q.N_A \epsilon_{Si}.\left| \phi_S - \phi_F \right|}$

## Formation of Depletion Region
- For small gate voltage levels,
	- Majority Carriers are repelled back and surface of p-type substrate is depleted.
	- Current conduction between Source and Drain not possible.