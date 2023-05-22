## WiFi Alliance
- Wifi -> Wireless Fidelity
- 802.11b was the first broadly accepted standard.
- Wireless Ethernet Compatibility Alliance (WECA) industry consotium was formed in 1999
	- to assist interoperability of products.
	- It was renamed to **Wi-Fi (Wireless Fidelity) Alliance**.
	- Created a test suite to certify interoperability.
	- Initially it was 802.11b then it got extended to 802.11g.
	- It is concerned with range of WLANs market which includes enterprise, home, and hotspots.

### IEEE 802.11 Services
| Service           | Provider            | Used to Support         |
| ----------------- | ------------------- | ----------------------- |
| Association       | Distribution System | MSDU delivery           |
| Authentication    | Station             | LAN access and security |
| De-Authentication | Station             | Lan access and security |
| Di-Association    | Distribution System | MSDU delivery           |
| Distribution      | Distribution System | MSDU delivery           |
| Integration       | Distribution System | MSDU delivery           |
| MSDU delivery     | Station             | MSDU delivery           |
| Privacy           | Station             | LAN access and security |
| Re-association    | Distribution System | MSDU delivery           |

### IEEE 802 Protocol Architecture
|                       | General IEEE 802 function                                                     | Specific IEEE 802.11 functions                            |
| --------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| Logical Link Control  | Flow control and Error control                                                |                                                           |
| Medium Access Control | Assemble data into frame, Addressing, Error Detection, Medium Access          | Reliable data delivery, Wireless access control protocols |
| Physical              | Encoding/Decoding of signals, Bit transmission/Reception, Transmission Medium | Frequency band definition, Wireless Signal Encoding       |

![](../Images/Pasted%20image%2020230512152140.png)

### 802.11 Wireless LAN Security
- Wireless traffic can be monitored by any radio in range, not physically connected.
- Original 802.11 specification had security features like
	- Wired Equivalent Privacy (WEP) algorithm but it had major weaknesses.
- 802.11i task group developed WPA and RSN.
	- WPA -> Wi-Fi Alliance Wi-Fi Protected Access.
	- RSN -> Final 802.11i Robust Security Network(RSN).

#### 802.11i RSN Services and Protocols

- Services and Protocols related to Robust Security Network.
	- Access Control
		- IEEE 802.11 port-based access control.
	- Authentication and Key Generation
		- Extensible Authentication Protocol (EAP).
	- Confidentiality, Data origin authentication and Integrity and Replay Protection
		- TKIP.
		- CCMP.
	- Confidentiality
		- TKIP -> Temporal Key Ingerity Protocol (RC4).
		- CCM -> Counter with Cipher block chaining Message Authentication Code (AES-CTR).
		- NIST Key Wrap.
	- Integrity and Data Origin Authentication
		- HMAC-SHA-1.
		- HMAC-MD5.
		- TKLP (Michael MIC).
		- CCM (AEC-CBC-MAC).
	- Key Generation
		- HMAC-SHA-1.
		- RFC 1750.

![](../Images/Pasted%20image%2020230512153015.png)


![](../Images/Pasted%20image%2020230512153821.png)

### 802.11i Phases of Operation

- Different types of networks have slight variations in the operations.
- Case 1
	- Two wireless stations in the same BSS communicating via the access point (AP) for that BSS.
	- Secure communication is assured if each STA establishes secure communications with the AP.
- Case 2
	- Two wireless stations in the same ad hoc IBSS communicating directly with each other.
	- Same as Case 1 but AP functionality lies in the stations.
- Case 3
	- Two wireless stations in different BSSs communicating via their respective APs across DS.
	- Security is not provided across distribution system at level of IEEE 802.11 but only within each BSS.
	- End to end security must be provided at a higher level.
- Case 4
	- A wireless station communicating with an end station on a wired network via its AP and the distribution system.
	- Security is only provided between the STA and its AP.

- Now, the five phases of operations are
	1. Discovery
		- Beacon and Probe responses are used to advertise its IEEE 802.11i security policy.
		- STA uses this to identify AP for WLAN.
		- STA associates with the AP which it uses to select cipher suite and authentication mechanism when probe response presents a choice.
	2. Authentication
		- STA and AS prove their identities to each other.
		- AP blocks non-authenticated traffic until authentication transaction is successful between STA and AS.
		- AP does not participate other than forwarding traffic.
	3. Key Generation and Distribution
		- AP and STA perform several operation that cause cryptographic keys to generate and get placed on the AP and STA. Frames are exchanged between AP and STA only.
	4. Protected Data Transfer
		- Frames are exchanged between STA and end station through AP. Only secure data transfer occurs between STA and the AP.
		- Security is not provided end-to-end.
	5. Connection Termination
		- AP and STA exchanged frames.
		- Secure connection is torn down and connection is restored to original state.

![](../Images/Pasted%20image%2020230512165114.png)

### 802.11i Discovery Phase
- Purpose of this phase is for STA and AP to recognize each other, agree on a set of security capabilities and establish an association for future communication using those security capabilities.
- STA and AP decide on specific techniques.
	- Confidentiality and MPDU integrity protocols for protecting unicast traffic.
		- protocols for protecting broadcast traffic are dictated by AP since STAs in multicast group must use same protocols and ciphers.
		- Cipher suite -> Protocol + chosen Key lengths (if variable)
		- choices -> TKIP and CCMP
	- Authentication method.
	- Cryptography key management approach.

### 802.11i Authentication Phase
- Authentication phase enables mutual authentication between an STA and AS located in the DS.
- Designed to allow only authorized stations to use the network and to provide the STA with assurance that is communicating with a legitimate network.

### 802.11i Access Control Approach
- Standard used: IEEE 802.11 Port Based Network Access Control.
- Authentication protocol used: Extensible Authentication Protocol (EAP).
- Before station is authenticated by AS using an authentication protocol, The authenticator only passes control or authentication messages between supplicant and AS.
	- 802.11 Control channel is unblocked but data channel is blocked.
- Once supplicant is authenticated and keys are provided, AS can forward data from supplicant to network.
	- 802.11 Data channel is unblocked.
- **Ports are logical entities defined within the authenticator and refer to physical network connections.**
	- Uncontrolled port allows exchange of PDUs between station and other AS regardless of authentication state.
	- Controlled port allows the exchange of PDUs only if current state of station authorizes such an exchange.

![](../Images/Pasted%20image%2020230512180726.png)

### 802.11i MPDU Exchange
- Authentication phase can be further divided into three phases.
	- Connect to AS: STA sends a request to its AP.
	- EAP Exchange: Exchange authenticates the STA and AS to each other.

### 802.11i EAP Exchange
- Number of possible EAP (Extensible Authentication Protocol) exchanges that can be used during authentication phase.
- Message flow between STA and AP employs EAP over LAN (EAPOL) protocol.
- Message flow between AP and AS uses Remote Authentication Dial In User Service (RADIUS) protocol.
1. EAP exchange begins with AP issuing an EAP Request to STA.
2. STA replies with EAP Response which AP receives over Uncontrolled port. Packet is encapsulated in RADIUS over EAP and passed to RADIUS server as a RADIUS Access Request Packet.
3. AS server replies with RADIUS Access Challenge packet which is passed on to STA as EAP Request. Request is of the appropriate authentication type and contains relevant challenge information.
4. STA formulates an EAP Response message and sends it to AS. Response is translated by AP into RADIUS-Access-Request with response to challenge as Data field.
5. AS grants access with RADIUS-Access-Accept packet. AP issues EAP success frame. Control port is authorized and user may begin to access the network.

### 802.11i Key Management Phase
- Variety of cryptographic keys are generated and distributed to STAs.
- Types of keys:
	1. Pairwise Keys: For communication between STA and AP
	2. Group Keys: For multicast communication.

#### Pairwise Keys
- Used for communication between a pair of devices. (STA and AP)
- Keys form a hierarchy beginning with master key from which other keys are derived dynamically and used for limited time.
- Top level hierarchy has two possibilities:
	1. Pre-Shared Key (PSK): Secret key shared by AP and STA and installed physically.
	2. Master Session Key (MSK): Also known as AAAK, generated using IEEE 802.1X protocol during authentication phase.
- Pairwise Master Key (PMK) is derived from master key. If PSK is used as PMK, if a MSK is used then PMK is derived from MSK by truncation.
- PMK used to generate pairwise transient key (PTK) -> Consists of three keys. To derive PTK, HMAC-SHA1 function is applied to PMK, the MAC addresses of STA and AP and nonces generated when needed.
- Using STA and AP addresses in generation of PTK, Session hijacking and impersonation is avoided.
- Parts of PTK are
	1. EAP Over LAN (EAPOL) Key confirmation Key (EAPOL-KCK)
		- Supports integrity and data origin authenticity of STA to AP control frames.
		- Performs access control function.
		- Proof of Possession of PMK.
	1. EAPOL Key Encryption Key (EAPOL-KEK)
		- Protects confidentiality of keys and other data during RSN association procedures.
	1. Temporal Key (TK)
		- Provides actual protection to user traffic.

- Pairwise Key Distribution
	- 4-way Handshake -> MPDU.
	- STA and AP use this handshake to confirm the existence of PMK, verify selection of cipher suite and derive a fresh PTK.
	- Four parts of the exchange are:
		1. AP : STA -> Message includes MAC address of AP and nonce (Anonce).
		2. STA : AP -> STA generates its own nonce (Snonce) and uses Anonce and both Mac addresses plus PMK to generate a PTk. STA sends a message containing its MAC address and Snonce, enabling the AP to generate same PTK. Message includes MIC using HMAC-MD5 or HMAC-SHA-1-128. Key used with MIC is KCK.
		3. AP STA -> AP able to generate PTK. AP sends a message to STA containing the same information as first message but includes MIC.
		4. STA : AP -> Sends back acknowledgment message protected by MIC.

![](../Images/Pasted%20image%2020230512220839.png)

#### Group Keys
- Used for multicast communication in which one STA sends MPDUs to multiple STAs.
- Group Master Key(GMK): At top level of group key hierarchy.
- GMK is key generating key used with other inputs to derive **Group tempoal Key (GTK)**.
- GTK is generated only by AP and transmitted to its associated STAs.
- GTK changed every time a device leaves the network.

- Group Key Distribution
	- AP generates GTK and distributes it to each STA in multicast group.
	- Two message exchange with each STA
		- AP STA -> Message includes the GTK, encrypted with RC4 or with AES. Key used is **KEK**. MIC value is appended.
		- STA AP -> STA acknowledges receipt of GTK. Message includes a MIC Value.
![](../Images/Pasted%20image%2020230512220848.png)

### 802.11i Protected Data Transfer Phase
- Two schemes for protecting data transmitted in 802.11 MPDUs
	- Temporal Key Integrity Protocol (TKIP)
	- Counter Mode CBC MAC Protocol (CCMP)
![](../Images/Pasted%20image%2020230512223223.png)

#### Temporal Key Integrity Protocol
- Designed to require only software changes to device that are implemented with older WLAN security approach (WEP).
- Provides two services
	1. Message Integrity
		- TKIP adds MIC to 802.11 MAC frame after data field.
		- MIC generate by Michael algorithm.
			- Computes 64 bit value using as input the source and destination MAC address values and data field plus key material.
	2. Data Confidentiality
		- Provided by encrypting the MPDU plus MIC using RC4.
#### CCMP
- Intended for newer IEEE 802.11 devices.
- Provides two services
	1. Message Integrity
		- CCMP uses CBC MAC.
	2. Data Confidentiality
		- CCMP uses CTR Block Cipher mode of operation with AES for encryption (AES-CBC-CTR).

### IEEE 802.11i PseudoRandom Function
- PRF built on use of HMAC-SHA-1 to generate pseudo-random bit stream.
- HMAC-SHA-1: Message and key of length at least 160 bits -> 160 bit hash value.
- SHA1 has a property that change of single bit of input produces a new hash value with no connection to preceding hash value.
- K -> Secret key
- A -> Text string specific to application (Nonce generation or Pairwise Key Expansion)
- B -> Data specific to each case.
- Len -> Desired Number of pseudorandom Bits.
![](../Images/Pasted%20image%2020230512223512.png)

### How it Works
- Probe Request
	 - Station sends a request to join network
- Probe Response
	- AP (Access Point) sends possible security parameters (security capabilities set as per the security policy)
- Open System Authentication Request
	- Station sends a request to perform null authentication.
- Open System Authentication Response
	- AP performs null authentication.
- Association Request
	- Station sends a request to associate with AP with security parameters.
- Association Response
	- AP sends the associated security parameters.
- Stations sets selected security parameters.
- Now 802.1X controlled port is blocked.
	- 802.1x EAP request. (From AP to STA)
	- 802.1x EAP response. (From STA to AP)
- Access request (From AP to AS) (EAP request)
- Extensible Authentication Protocol exchange takes place.
	- Accept/EAP success key material from AS to AP.
	- 802.1x EAP success is sent from AP to STA.

![](../Images/Pasted%20image%2020230512180556.png)



## Wireless Application Protocol (WAP)
- Universal, Open standard developed to provide mobile wireless users access to telephony and information services.
- Significant limitations of devices.
- WAP Specifications include:
	- Programming model.
	- Markup Language.
	- Small Browser.
	- Lightweight communications.
	- Protocol stack.
	- Applications Framework.
![](../Images/Pasted%20image%2020230512224117.png)
![](../Images/Pasted%20image%2020230512224141.png)

### Wireless Markup Language
- Describes content and format for data display on devices with limited bandwidth, screen size and user input capability.
- Features of this language:
	- Text/Image formatting and layout commands.
	- Deck/Card organizational metaphor.
	- Support for navigation among cards and decks.
- Card is one of more units of interaction.
- Deck is similar to HTML page.
![](../Images/Pasted%20image%2020230512224412.png)

### WAP Protocol
- Wireless Session Protocol (WSP)
	- Provides applications two session services
	- Connection Oriented and Connection less
	- Based on HTTP with optimizations
- Wireless Transaction Protocol (WTP)
	- WTP manages transactions of requests/responses between user agent and AS.
	- Efficient reliable transport service.
- Wireless Datagram Protocol (WDP)
	- Adapts higher layer WAP protocol to communications.

## Wireless Transport Layer Security (WTLS)
- Provides security services between client and WAP gateway.
	- Data Integrity, Privacy, Authentication, DOS protection.
- WTLS based on TLS(Transport Layer Security)
	- More efficient with fewer message exchanges
	- WTLS between client and gateway
	- TLS between gateway and target
- WAP Gateway translates WTLS/TLS.