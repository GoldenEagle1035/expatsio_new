// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ExpatisoNFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    
    mapping(address => bool) private _whitelist;
    bool public whitelistActive = true;
    bool public mintActive = true;

    uint256 public mintPrice = 9000000000000000;
    uint256 public maxSupply = 4242;
    uint256 public maxBatchSizeWhitelist = 3;
    uint256 public maxBatchSizePublic = 10;

    address private owner1 = 0x699fA85c97317Bc5E239a30BBB942C72876c42b8;
    address private owner2 = 0xecD23190F99c1C8E47b16f6A5b2AA37c3B2Fb651;

    constructor() ERC721("ExpatisoNFT", "Expatiso") Ownable(msg.sender) {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://bafybeielu4gy6kaqdr5bjsfo54ud4a5lvbitj264weqmchkga5rrb3lfle.ipfs.4everland.io/";
    }

    function addToWhitelist(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            _whitelist[addresses[i]] = true;
        }
    }

    function removeFromWhitelist(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            _whitelist[addresses[i]] = false;
        }
    }

    function setWhitelistStage(bool isWhitelist) external onlyOwner {
        whitelistActive = isWhitelist;
    }

    function mint() external payable {
        require(msg.value >= mintPrice, "Insufficient ETH sent");
        require(canMint(msg.sender), "Not allowed to mint during this period");
        
        uint256 tokenId = ++_nextTokenId;
        require(tokenId <= maxSupply, "Max supply reached");
        _safeMint(msg.sender, tokenId);
    }

    function batchMint(uint256 quantity) external payable {
        if(whitelistActive) {
            require(quantity > 0 && quantity <= maxBatchSizeWhitelist, "Invalid quantity");
        } else {
            require(quantity > 0 && quantity <= maxBatchSizePublic, "Invalid quantity");
        }
        require(msg.value >= mintPrice * quantity, "Insufficient ETH sent");
        require(canMint(msg.sender), "Not allowed to mint during this period");
        
        uint256 startTokenId = _nextTokenId + 1;
        uint256 endTokenId = startTokenId + quantity - 1;
        require(endTokenId <= maxSupply, "Exceeds max supply");

        for (uint256 i = startTokenId; i <= endTokenId; i++) {
            _safeMint(msg.sender, i);
        }
        _nextTokenId = endTokenId;
    }

    function canMint(address minter) public view returns (bool) {
        if(!mintActive) {
            return false;
        }
        if (whitelistActive) {
            return _whitelist[minter];
        }
        return true;
    }

    function endMint() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH available to withdraw");

        mintActive = false;

        payable(owner1).transfer(balance / 10 * 8);
        payable(owner2).transfer(balance / 10 * 2);
    }

    function setMaxBatchSizeWhitelist(uint256 _maxBatchSizeWhitelist) external onlyOwner {
        maxBatchSizeWhitelist = _maxBatchSizeWhitelist;
    }

    function setMaxBatchSizePublic(uint256 _maxBatchSizePublic) external onlyOwner {
        maxBatchSizePublic = _maxBatchSizePublic;
    }
}