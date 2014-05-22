Chapter 5: Networks
=====================

#### IP (Internet Protocol)

Almost every device (computer, phone, server, etc) that you interact with communicates via the Internet Protocol. A device has an **IP Address** which allows other devices to send messages to it. Devices also have a **subnet mask** which tells the device what range IP Addresses are possible in its network.

Devices communicate with one another over the Internet Protocol by sending a **packet** of data to an **ip address** and a **port**. Ports are numbers that differentiate traffic on a single device. Popular services or applications run on ports that are [well-known](http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers).

The model of a device sending data to another device using IP Addresses and Ports is referred to as the **client-server** model. The **server** is the device which is **listening** or is **bound** to its **IP Address** and **port**. The **Client** sends information to the other device's **IP Address** and **port**.

Let's assume we have a computer with the following network configuration:

```
IP Address:      192.168.1.5
Subnet Mask:     255.255.255.0
```

This configuration tells the computer that other devices on its network will have an IP Address in the range of ```192.168.1.1 - 192.168.1.254``` and that other devices can send packets to it on its IP Address of ```192.168.1.5```. 

Devices normally communicate via a switch, a networking device which the devices connect to and forwards messages to devices based on their IP Addresses.

#### IP Routing

If the computer tries to send data packets to a device with an IP Address that is outside of the range defined by the IP Address and Subnet Mask, the packet will go to the **default gateway** to be **routed** to the destination. The default gateway  (Your router at home is normally your network default gateway and a switch).

Updated example the computer network configuration:

```
IP Address:      192.168.1.5
Subnet Mask:     255.255.255.0
Default Gateway: 192.168.1.1
```

If the computer tries to send a message to another computer with an IP Address of ```54.128.64.3``` (a email server for example), it will forward the message to its default gateway (usually the home router) because the ip address is outside of its subnet. The packets would then be routed to the ISP (Internet Server Provider) who would then route the packets to the correct destination.

#### TCP (Transmission Control Protocol)

Often referred to as a **connection-based prototol**, TCP relies on handshaking and verifying to deliver data as a reliable, ordered, and error-checked stream. These characteristics of TCP is the reason that the **World Wide Web** (http), email, and other services use this protocol to ensure data is received properly.

However, as a consequence of ensuring that data is received in-order, real-time applications such as video calling or multiplayer video games can suffer significant network lagging if packets are not received, which causes the originating device to have to retransmit the packets until the receieving device ackowledges their receipt.

#### UDP (User Datagram Protocol)

While TCP is a connection-based protool, UDP is a **message-oriented protocol**. Sending data via UDP is much more lightweight (there are no connection handshakes) and potentially faster because the protocol does not guarantee packet delivery. Packets are also not guarenteed to be received in order. Due to these characteristics, UDP is often the protocol chosen for real-time applications such as video calling or multiplayer video games. For applications which ordering or receipting is required that use UDP implement their own logic of packet ordering or retransmission.
