Tags: #mos

# Structure of MOS
- Consists of three layers
	- The metal gate electrode.
	- Insulating Oxide (SiO<sub>2</sub>) layer.
	- The p-type bulk [[Semiconductor).

# Energy Band Diagrams

### Energy Band Diagram of p-type Silicon Substrate
![[Energy Band Diagram of Substate.excalidraw)

### Energy Band Diagram of Combined MOS System
- Energy band diagrams of components.
![[Metal Oxide Semiconductor EnergyBand of MOS System.excalidraw)
- The Fermi Potential $\phi_{F} = \frac{E_F - E_i}{q}$
- For p-type semiconductor, $\phi_{F_p} = \frac{kT}{q} \ln{\frac{n_i}{N_A}}$
- For n-type semiconductor, $\phi_{F_n} = \frac{kT}{q} \ln {\frac{N_D}{n_i}}$
- **Work Function**: Energy required to move an electron from Fermi Level into Free space. $$q\phi_s = q\chi + (E_c - E_F)$$
- Energy diagram of combined MOS System
	- Equilibrium Fermi Levels of [[Semiconductor) (S<sub>i</sub>) substrate and metal gate at same potential.
	- Bulk Fermi level is not **significantly** affected by bending.
	- Surface Fermi Level moves closer to the intrinsic Fermi Level.
![[Metal Oxide Semiconductor 2023-03-22 23.17.30.excalidraw)

## Example
![](../Images/Pasted%20image%2020230322232900.png)
#### Answer
$q\chi = 4.15 eV$
$q\phi_S = 4.15 eV + 0.75 eV = 4.9 eV$ No clue where the fuck did 0.75 came from but $q\phi_S = q\chi + (E_c - E_f)$
Built in potential difference in MOS: $$q\phi_M - q\phi_S = 4.1 eV - 4.9 eV = -0.8 eV$$
Flat Band Voltage:$$ V_{FB} = \phi_M - \phi_S$$
# Different kinds of operation modes in MOS
- [[Accumulation Mode MOS)
- [[Depletion Mode MOS)
- [[Inversion Mode MOS)