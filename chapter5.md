Chapter 5: Networks
=====================

#### Internet Protocol (IP)

Almost every device (computer, phone, server, etc) that you interact with communicates via the Internet Protocol. A device has an **IP Address** which allows other devices to send messages to it. Devices also have a **subnet mask** which tells the device what range IP Addresses are possible in its network.

Let's assume we have a computer with the following network configuration:

```
IP Address:      192.168.1.5
Subnet Mask:     255.255.255.0
```

This configuration tells the computer that other devices on its network will have an IP Address in the range of ```192.168.1.1 - 192.168.1.254``` and that other devices can send packets to it on its IP Address of ```192.168.1.5```. 

Devices normally communicate via a switch, a networking device which the devices connect to and forwards messages to devices based on their IP Addresses.

#### Routing

If the computer tries to send data packets to a device with an IP Address that is outside of the range defined by the IP Address and Subnet Mask, the packet will go to the **default gateway** to be **routed** to the destination. The default gateway  (Your router at home is normally your network default gateway and a switch).

Updated example the computer network configuration:

```
IP Address:      192.168.1.5
Subnet Mask:     255.255.255.0
Default Gateway: 192.168.1.1
```

If the computer tries to send a message to another computer with an IP Address of ```54.128.64.3``` (a email server for example), it will forward the message to its default gateway (usually the home router) because the ip address is outside of its subnet. The packets would then be routed to the ISP (Internet Server Provider) who would then route the packets to the correct destination.

#### TCP 

#### UDP

