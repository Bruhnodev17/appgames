export interface IGames {
    id: number;
    name: string;
    platform: string;
    genre: string;
    releaseDate: string;
    rating: string;
    developer: string;
    ratingScore: number;
    image: string;
}

const games: IGames[] = [
    {
        id: 1,
        name: "The Witcher 3: Wild Hunt",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2015-05-19",
        rating: "Mature",
        developer: "CD Projekt Red",
        ratingScore: 4,
        image:
            "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
    },
    {
        id: 2,
        name: "Red Dead Redemption 2",
        platform: "Xbox One",
        genre: "Action Adventure",
        releaseDate: "2018-10-26",
        rating: "Mature",
        developer: "Rockstar Games",
        ratingScore: 5,
        image:
            "https://store-images.s-microsoft.com/image/apps.58752.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.0cf58754-9802-46f8-8557-8d3ff32a627a?q=90&w=480&h=270",
    },
    {
        id: 3,
        name: "The Legend of Zelda: Breath of the Wild",
        platform: "Nintendo Switch",
        genre: "Action Adventure",
        releaseDate: "2017-03-03",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 2,
        image:
            "https://assets.nuuvem.com/image/upload/v1/products/5e49d770d597ec0f96e130bd/sharing_images/tmffdu3gugeb5al41qil.jpg",
    },
    {
        id: 4,
        name: "Fortnite",
        platform: "PC",
        genre: "Battle Royale",
        releaseDate: "2017-07-25",
        rating: "Teen",
        developer: "Epic Games",
        ratingScore: 4,
        image:
            "https://cdn2.unrealengine.com/25br-s25-egs-launcher-pdp-2560x1440-alt-logo-2560x1440-130a7d39cc26.jpg",
    },
    {
        id: 5,
        name: "Cyberpunk 2077",
        platform: "PlayStation 5",
        genre: "Action RPG",
        releaseDate: "2020-12-10",
        rating: "Mature",
        developer: "CD Projekt Red",
        ratingScore: 1,
        image:
            "https://cyberpunk-static.qtlglb.com/build/images/social-thumbnail-en-ddcf4d23.jpg",
    },

    {
        id: 7,
        name: "Grand Theft Auto V",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2014-11-18",
        rating: "Mature",
        developer: "Rockstar North",
        ratingScore: 4.8,
        image: "https://viciados.net/wp-content/uploads/2023/12/GTA-5-Liberty-City-DLC-Rockstar-Games-GTA-4-IV-V-Grand-Theft-Auto-Niko-B-2024.webp"
    },

    {
        id: 8,
        name: "Super Mario Odyssey",
        platform: "Nintendo Switch",
        genre: "Platformer",
        releaseDate: "2017-10-27",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.8,
        image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMarioOdyssey_image1600w.jpg"
    },
    {
        id: 9,
        name: "Horizon Zero Dawn",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2017-02-28",
        rating: "Teen",
        developer: "Guerrilla Games",
        ratingScore: 4.7,
        image: "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
    },
    {
        id: 10,
        name: "Super Smash Bros. Ultimate",
        platform: "Nintendo Switch",
        genre: "Fighting",
        releaseDate: "2018-12-07",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://s2-techtudo.glbimg.com/q9xuuO1wq1cEtBc3_xvZX0qdFEE=/0x0:695x392/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/u/MscdWZSseAsDeZS64imA/2014-10-06-smash-capa.jpg"
    },
    {
        id: 11,
        name: "God of War",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2018-04-20",
        rating: "Mature",
        developer: "Santa Monica Studio",
        ratingScore: 5,
        image: "https://meups.com.br/wp-content/uploads/2021/04/CAPA-God-of-WAR.jpg"
    },
    {
        id: 12,
        name: "Animal Crossing: New Horizons",
        platform: "Nintendo Switch",
        genre: "Life Simulation",
        releaseDate: "2020-03-20",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://www.showmetech.com.br/wp-content/uploads//2020/03/animal-crossing-capa-1920x1024.jpg"
    },
    {
        id: 13,
        name: "Marvel's Spider-Man",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2018-09-07",
        rating: "Teen",
        developer: "Insomniac Games",
        ratingScore: 4.8,
        image: "https://jogandocasualmente.com.br/wp-content/uploads/2020/11/review-marvels-spider-man-ps4-capa.jpg"
    },
    {
        id: 14,
        name: "The Elder Scrolls V: Skyrim",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2011-11-11",
        rating: "Mature",
        developer: "Bethesda Game Studios",
        ratingScore: 4.7,
        image: "https://jogandocasualmente.com.br/wp-content/uploads/2020/03/review-skyrim-capa.jpg"
    },
    {
        id: 15,
        name: "Minecraft",
        platform: "Nintendo Switch",
        genre: "Sandbox",
        releaseDate: "2018-06-21",
        rating: "Everyone 10+",
        developer: "Mojang Studios",
        ratingScore: 4.7,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgUFBUYGBgaGBoZGBobGhkZGxobGBsbGRsaGhohIS0kIh0qHxoaJTclKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHxISHzwrIyozMzMzMTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMTMzM//AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEMQAAIBAgMECAQCBwcEAwEAAAECEQADBBIhBTFBUQYTImFxgZGhMrHB0RRCByNSYnLh8FOCkpPC0vEVM6LiQ7LTJP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgICAgEDAgcBAAAAAAAAAQIRAyESMQRBURMiYTKRBXGBobHB8EL/2gAMAwEAAhEDEQA/AJSKQrUpFRYi4EXM26QPMmB868BM+qetsYVpjLVZj8YHt5YIlh6BVbfzzN7UAmKuL8NwxybtD3rqhhlJWcWTyYxlVWg7auzrbhnaQwUmQeCgnUbqzdtAd/Kjb1+4QwmZAB3yRqD66elAi5l0IOtd2KMoqmzzc84ylcVRDewR3g+v3od8KwqyF9TxpTXQjkcUcFHVplbcIMSIaNQZ86ha2rfFbU969hvbsnzFOuXwqgHixPhAj6+1Pto7AMtu6QQCCLVwgg6gghdRRSKcmwNxB1EU27hLiashA571/wAQ0oy3cDCRqDUmHL6taS7EkEojspI0OoUg0nfoSS9kmxmW32nBlhoQJgeG/X5RV/Zuq3wsD8/MVR4bEKS4K3C6qQVFtyVLDewC6T31AbsMqlLgdvgXq3DGN+UZZPlWE8fJ2deLNxVejQ4m7kExOsUMMVIjj71FtDFAWxmS6ozKMz2riiToJZlA30Fadmk27dx4JEpbdxMbpCkTqKmOPRcs++9B/WkcaZdumOVMw+JUuyFLpddSgtXCVEAgsuWRMjeKMa5P/wAV/wDyL3+2q2n0PlFr9QGt4+NElaiu3lQF3t3UURLNauqokwNSsDU017zsAUtXiCJBFm6ZB3EHLuqtv0TyjFbdkN+1HHyocrUpt3f7G/8A5N3/AG1CLkuUCXC6iWTq3zKNNSuWQNRr31qmYNo7LSRUvVXP7G//AJN3/bTbsoC727qKIlntXFUSYEkrG8gVXInR1tGO4edFhaS1cdgCLN4ggEEWbpBB3EdndTyG/sr/APkXf9tS5M0jx+RmWkK0gxALm2EuFwJKC1czgaalcsgajXvp5z/2V/8Aybv+ynyH9vyNK00rS3rhRSz27qqN7NauKB4krArkLMAy27zKQCCLN0gg6gghdRVcidfI0rTStSlX/sr/APk3f9tDXcSFJUqwYQcrqymDuMMAYqlKyXRwYbpFKVqsajcFensngN9aNUQpW6JctdlpL98KYieddZuhp0iKLY9XRwFCX9pKJABJ9Pnr7Ucwqvxb2SZYyR+zvPcYrnyU5KyJKgO7tC4d0KO771D1btrBPef51JZtEkEDSR86terHKpbUehRjy7NiNrITyXWTx0yjUcNWqqx93rHYyQDGkmNBxHjrQzM3IbiJ8eJ5kb/E05jXn48Si7PWyZpSVMFuKyjQ7uVQfiW7jRrGhLlsAzwGtdUTkkSsaGxKZvGnm+vMfKh7mJg7gRWiMpECIcw8aLY0JdxAI0kGofxDDj61ojJhRwRu3LdtTq7qnkx1PkJPlXrf4P8AV9WrFRlygiJURAjSNPCsL0Fw2fEm4wkWbcmI0e7KrvP7If1rZ7X2z1WIw+GROse+xB7WXIqxLnQzoSY0+E61LGjy7ZuyHOLOHQXFsm4wzsuoVJ7U5cskLy4ivS9m4NMNbW0HlFVjmMTJbMSSNJMsaI2vtg2cThsMtvO18tJzZcirEtGUzpm00+HfTuleJ6nB37kwRbZVPJn7C+7CgaVGc6B2+sGJxRn9biGyk/srqPLtkeVNKG5tgKTIsYcnQQAzaczrFwelaDoZgOrwOHWNSgc+Nzt/6qpuhv6zF4/EEGDdFtCATohYcByCUAG9Ktki9hnDM4CA3IQCWKKxA3E7+VDdBsE6YNC8hnZ3ZWWCJdh46gA60zpRt/qMbhkN1rdrKz3uy2o1CyMsxKkac611i4rhWGaH+GVZZ0niBGlAGI6OdvaGPcAtlZLekaRK8T+57VP0u21icM1tbFkXMysWlXaIIA+BhHHfT/0cqLn4y8Pz4l9e4dof/endLOmf4K+LPUi5KK+bPliWYRGU/s+9AejE7d6T4y/Ya3dw6JbbLLhLq7mDCGZiNSBXp+BQLZSdALacDuCjjEV5n0g6b/isMcP1AQEp2s+b4TMRkHLnXruGsRbUckHLlSYI8lf9IuKBIFvDkSYOW5/+lFdDNqPicfduugzPYIIQQBlKAGGadw5nfWewux7TqHbE21ZhJUlZBPAy1aPoBhUtY9gt1XH4dyWWCB2lkaE6wJ86E09DcGlbNXtraF61+H6u3mD3FS5KsSqmJIiIjXUyKXpiEGDvKzKpZGyhmAzFYaFB3nQaCiulW3fwdpLotlw1wIQcyQCrGZymfh3d9E7d2PZxFpw6I7BHKGdVbKQG0PhTEUezrl47NsvhygcW01eSuVBlaY1nT2oLAdJnxN63aw7W9MvXC4ILwe2bBBMjKpOoHCrX9HQFzZ1tTrBuIfN2PyanYHZezreJSxbAXEWFLjslWZWXLLvlAfR90z6UAVmNTq9r2W/LesMk/vLmP+lKtuk+IvWbBuWba3GDqGRld5UyNApBkHKfWgOnw6q5gcTMZMQFY/uvlYj0RvWtbji1u27qudkRmCzGYqCQs8JiJoA8pxXSLaFyy1l8JoyFS3VXswDSJHaieRPKhdj9N71lLdhktlFKqWIfOFDaj4okCRuq4H6UDmzfhBEAR1usgkzOTv3RWD2lez3bj5cud2bLM5cxLZZgbp5UE2e5bUtv1Nw24zhGZJ1BYCV9xXlWN2rcxbi9cREOQIAgYZgCTJzMeZr0/ohtJb+DtN2iyoFfsPGZeye1lgzE6HjXmW2MP1GIuWQICOcoII7DdtND+4yjyqoNJ7CT0QZaculIhkTTjXTYCMaZm3Rvp4Wm5aBUWeHcMk+R8RvqvxGDQsSBA7t3pU9tyFgbq6K5Zzt6NatbI7doDQUQaZS5TWTYy0LVGxpuakJrNI6GziaY9dNQ3WMab+FWkZSYLfsRu3UO9s0U125xUH+vGoGxQ4qa1SaMm0R2rczPKlt4YFgDz1+tNfFR8PnNMbFmDpqQRPjofaqVkGy6IdJMHZsutzrOse6XbKiMMogINTqIUcN5NZfpltbr8Yb1rMiqqqhIVGgbycunxMfKKqmHEaEbj/XClu3CwgqvjP8AKjiKzQdDdt2bWKS/iS7FVdVjtMGaAPib4cufzNXnTzpZZxOGWzaFwA3Fa4SqjsLOg7WpzZT5V5/bSFg+dW/R65bOItDEZTbDZnkEh8gLKhWNczBQeGpocfYJ+j0ZP0gYQKwRLsBALfYSCQDH59OFZ/oL0rw2Fwxt3Ful2vM9whVI1AAIlgfyjhzonZR2WQHVbIzNdd0u2+syMUCrbtnIewHBfwahr93ZnaJt2xdTCkgKg6q5cdTmlMsBkYtlbTTwFSVbM3082smKxhuIGVAiIuYDNAkkwCRvLca9EufpAwcLkS9opy9hN+WFHx+NUWC2ngXu4ZbljDKjWC90iwg/Ww0JohMCV4R2eNPx9zZ6rd6xLDIQi2+pTq7iBnh2zi2gzrCEGIIJG4mgAXoP0nw2GwvVvbuG4L2diqpuJUaEsDooOlaXE9OMAwJNp2aNCbdsnu1L86rm/wCmqE6sYUorDrM9iXdFt2x2DkIDMQ51YatM8aq8V+A/Cv1a2cpskIMjHEDET2WN0j4c3DPu0jhQGxnTnb2DvYUW7Fp1frEZmZEXsqriJDHiw0AitNd/SHhlCZLV1/hDTkUgaSR2jMCdJHDxFDgjgUwI6xbHXdWcxKZ3ztp2i9vQzp2bgA4DgZ1Gyxeuta6sk307Ny0rWlQFi/VqEJUFSVgjUqDpuUDZa3ummz8vYsOWkQOqt8xP5uU1nLnSbDDaZv27dxbZw5tkBFDZjPayhojdxrn2nhkbFr1GEbKynDnqEhs7p2dUkQjceIMVPhX2f1dpmTDZMtmUNsm71gZOsLPABQnPoWbQxl4ACxen3SzDYnC9VbW5m6xGBZVA7IadQxPHlWhT9IWDygOl74RPZt6mNR8dYzaJ2fk/UJquPVj1gDZrXbzIkIsW9AchmtJijs/r0KLgxZ7cqbAL5ijhDpZAyglTBJ3caAtlT0B6V2cLhXtXVuMesZ0yqsFSqiDLCDIPrS3+ldg7WTFItzqxYyXAVXNMNBAzQRJTjwNFWBgcxVhg85sPncWWNsXJIs5EydmBmzEKJgbzuqv+q4drFmMPhRca+Uf9SkZBlyvPV6rMyN5B3a0AHdOuk2DxWFNu0j9ZnVkJRBEfFqGJ+Gd3dWgw/wCkDCdWvWJdDZBn7CETHa1z7pmqq8Nn9ZcFsYTtOjEtZOVbWTKbajISr5gTmAEgzMiKHuf9IZlVVRA1i6gYCcol1tu6kHthcjB1lpDTM6AbMlgtjqWFzXISWVGEHLJy5tTwgxQPSC2Bdn9pQT46j5AVprDFkViIJUEjlImKptt2czru0A36cTpNRFtyM7NN+j/pTbwtl7V9bhHWF0KhW3gBgZYRqs+Zqv6ZbXsYrEi5YDj9WEfOqr2lYlYhjJhiD4CqldnudOyo4lSSY7tBrXYu2qkKogBfqd/fVWr0OT0OsfD/AFzp/fUOH3nwomN1dEXoqO0NinW1M6UtpJNGBeVRkyVotIhyGnBQN9SRTbqSIG+uaxtiAilCmktWWGtdiLpSJEzPHlH3oWx3ommmM1dNR3W0rpUdCciE594YedNLsNXiOYqeorh4f1/WtNY12Q5jTeU/mHrQ5sqdY1OvrrUjIvECoYcfm9hWlfJk2I2FHM0Lft5TEzxok3HH5Z8jThDakCaKT6DZXzXUW+EG8GKiOGPMVK2BBNIac6QYNI7jgeMbokc/lQ3sDggPAelFWURYkACeMUMXjdTkss2p0/rlTANfDo50K674g1NhkVCFIWATOmsnQEHwA9abhrCruHnxoh7BZSAFJJBDEsCkbwANDOm/dGkTUTi30XBpA4RZOinyEDw0rXJYTRsizoZyifGayqSFCkg5ZAhQN5J1O86njuGm6tEuLnKAOQ1qJwdIcZW2TnC2/wCzT/Cv2pt7CWypXInwkDsjSZ7uZqVmjfSBxWBZVXdkW1tsTBIEiAABVRdwqGTA57hWoxR/Vv8Awt8qzscK0hJiaA/w40MCDoDAqTIIEopnSYA3GjsVZGTTQLJjxoB7vZUQdJ3azOtdCfIzcdiJhVyFoE5o3CjNnWEIYsqk5o1A3ACoFchIKsskMJBEjmOYp2HxJUECN9KVtMpINxGGQqQEWeEKKHw2CgyyrHKAdasjSVy/UdUS3Y01C9lSZIBPfUxqO48AnkCfQTUIBDVVjvjPgPlRuHxQc5Yg+1JfwOZs2aN3D+dXH7XsT2tFajkGRRFm7mIWIkgetQOkEjkSPQ0tggOpOgzLJ8xW3JpaFGTRd2cNA1qTqxUiKrahsw7jNOFscq5223bOhIiXLuETT4oPEqRcBA3D70WHFDGmLFC4vDl4jhP0onOKal4EleI30JtdA6eisvPB36aH71C1zQf8cakvgkyI3c43+NDtbbl7iuhy32c7kEpdmdRw/nSOdajt2BGqz4rTlQDQCK3g7RNiXN3t66Uylund3n+f0ppnu96oBi4le/0oTqmJM6UU5UCQFJHhQeJxJJEaR31ki2I2KcEie7cKQYpu6oaSiySS7czGajrq6mBPg0zOF56CrB0yPk3xvPDcD9fagMAf1ifxCjNo3JuMVM6rBGvACs+bUkvRainG/YUhipRiAOBPtUSKYgiDxHI1ebB6M/ibfWdaFXMVIClmBHPUDcQfOp8nM8aT9GuDFzdeygZpqHHXGyTmbQjcSO7h416Rh+huGX4y7+LZR6KAfeq7pN0UDKXsBEVLbll7UsVlhG+Sd0k8q4o+YpSSbOqXiuMW0jzRtdTr461uOiSdZaRJiMwmJ3HT2IrE5TEwYPHhWw/R8/adeQLf4so+lb+VJxxOS7Rz+PBSyKL6Zpb2wnKkLcTUEakrvHhVM3RTFDcEb+Fx9YrQ7UfsgfvfQ1Vg15WPzMrV2v2PXf8AD8T+Slu7DxaOWa05SSTBV9P4QSfaqLFXXtkhWdGMgwSjRvgjQx3HlW7F9huZh5mo8U+dSLnbWNzw3zrsx+fK/uX7aMJ/w1f+X+5g8LeedXZtIEmYHId1XmEtKUUlRPh31Q20aZj83pM6e9WVrFuFgBYA4z969GabWjyKZbU+3ZZvhUnwqk/FXmMKRPABQT7zXo/RTYY6steD5nVCJIEysmABzNYfTa7FTMfi7ZtgNcBUFgoPNiCQNO4H0obEmFaf2T8quv0hWAqi2JAF23x522+9ZkYBf2fnTcEhqLZFs/8A7g86tnMb6ocPhWd8imDrvJA08KOXYD8XX0J+1Ekr2yVGXoEvfE38R+dR1b2dgoPiZj4dn70Qux7f73+I0+cUP6civ2ZdK5o4x9aurZkA021s+2u4fM/OpRZFZyds2gpJUNKjjSKF3CKk6kVXYvs3QRwA+tJKx7Doqvu2znYxy+QqwRpANcyjjTTobRWtZBEcYifCmfhxr7Ur3W7twJ051F+IY8B7/etTncl8Dmw4pDZMb+f8qdbvT8RA5b9ee6akzr+0Pf7Ux/awb8OaBxN0dpY7pq2Lj9oVSYqy2pMRM7wd5rSDJaiugZ2jdTCa5hFNJqxBuzLWZ4/dYzygT8qNVbcEkmBoZBEHnupzYVbLsAWYlInQAZhUSLcJkjTgZ4VztOUtEOSW2yuxKAOwG7T5Co1UncJ8Nau8VsTIDca4mvAh954SAflUGzrUNcj+yYBuRzrzpxyqtFctFW1sjeCPI1b4+2AtuNJEmOYCkH1of8SzKVJMBY1WM3DMPtU5tE2zcLEldADuA0GnrSk7p/k0xu00dg0cfrHaQ5ga6k848or1Xo6yvgyyFVdbbZVIADOkiDu1MD1rym2gCBurLvGVSD8J17R+e7hwrbdAsaWW5aYQysGjx7LR5getR5aXC2rp3X4OnxX99XVlvf2wq28txil4pqAp7LEaHiI3HfV1hX//AJkt3ADeBOdhBDCWiToToV9K88xW0Ct26t1TcdXYBiF0QfDOkbvnRXRfb6Iz27r5VZi6u7yBwySe6I8DXD9OXB8Vp76/wdsssOSUnv8A7sy+N2eVBtA6o5WT+6SPlVr0Fsst27I0yATzhqh6QYu317m2wcM2YFTI1AJ18Zo/oYWa4874QRwEk/aunyeT8dt/COXx3FeQkvlmh2mp7IgnedNd8RQCJLBDoTz3891aHEPkuKw3gho4aHT5VV7RsC7ihi3MOECBdMsAEcdZ1NeZixx47Z6s88k6iv7ktm0FUAwe+Kpdvfq7btI1Vo7p0Hzo7aOAW/kloCOHgQc0cD3b/Wo+nuNN2yeyFLFFAG7Ql/pW2PGnJb3fRzzzTjba1XZgS8BvEH0INEucpIG6oM4HYO8kt3Ruqw2Rs579wIsGZ3mNwmva/J5KZedENh9Y4uXEORWIJDAb000md5FbvaO0reGtEs2XKjG3oW+BdJgeG+hsOlvD2iQMqCC4EsS2iyJM8qxW1dpXMVcKq82rb3EZWAXsNoAIEnQc6zbvbEBbe2s95muXO2j5Cg0XtKIJIAnTvoc4gRIO+NwM67tKXbSBFS38MGQvGN3HWhbFgNmGWDvRSBuY8uHtRBp9jdpaJNk/90eDVoCjd1UOyv8AujwbjWjUaVll/UVDoiyHmKVFjfrUldFZlUMpYrij93dSdW/MUBYtRvYBMmnG2+uo9KGwGIZgc0T9KaFaeqHXbACtv3H5GhcFc7ME1ZOJBHMEUGuDA0FNPQUk+iAqIjhTCg+9PJppNbkkDoC4Hcfv9KeuGAkcDHtSEdoGiDQLinsBvWQJPeTHdQWKGh8dPAwR7VaYlRFVLAQNfH3/AJetCMZpJ6BXtidfP3+1CGjbnwkka/8AP0oStYsSD8Nee6xzmcqDXiYIUfOjS8DwFVWFOrQfy/UH6U57rD+ia2hFKNoxyYnJ96JX2m7pleDBBncTw14cabhLhLNyK/IrQpUxu41NhdCZ4qY8dD9K53CKWkbOOi32Zse7irnVWLZd4DESAFUEDMSTAEketEbS2bbw2TrHFyRmyoxCT2CQSQDMMRuEEcRQ2ydr3MM5uI0dnI44MpI0Ma7wD5VrMDsG1jlTE3XJQljkTs66AhjvEZdw9awnNQj9z0beNjcnS7MPh+uusVso7GJbKNw3yx3KN+pIozBWerks+djwUkIN+9tC3gI8TXrODwqWkCW0VFH5VAA8TzPea8+6Q7O6m8QBCN2k7gd6+R9orHH5Kyycar/Z15PGeOKldla9wtv3choPT676AupBIo2uuYYspbdAJ8a7cbpnDmqrYCgArbdGMOLVtXK9p+0TrMfl9tfOsZYt5nVZjMwEnSJMTXoagAADcBA8BurHzp/ao/JjjtO0FX71s6s8HhMzp3VW4nG21BJDso1LKjsB3kgaDxqLC2+txQG9bep/u/8AsR6Vs7OLjRtR715TcYtWev40cnHkmYROkGGGgZtf3W+1DdJEuXbS3Ldt2VJcwjQRpqDG6JNbLaHRLC4j9ZbC23mSVUZSf3k+ojzpuAs3cOcl1exOjjVfXh4GuiEoJqUe/wAhNzknFnmGLwvWWmcEKUyru1Oo1nzrfdH9kLZQfAXaHVwsFQVErO/gfWqXpPsoYe5k3Wb7M4eAFQg5sgjTlpyoXHdIbi2HtdSYAULcDMJCkQR2eIHPjXoKXJKjhri9hXSPbDXH/D2y6SHVtYUshnNp4VFhrCoNAATGYgfEeZ51W7MVYZg4cs2Y8cpP5aPFZZJekKMqExuGRrb6AEjfGsjUa1UbPS4LiqUk5YUmQDJ0M66VdiwzCNQDvY6ADmTuio3RjdDojFFZQhAJBVDvB5SCfOiF9lqSkVmzxGIIiPikcjWhUaVQns4tzwzN76/WrNb7cAT/AHT9qMi2EZpaDIpVSaFW7cO5D/hNGYbNBzKVPeCKhIbmvQ7Ie73+1NKt3ep+1SkgAkkAcZpqOCJUgg7iDI9afFE8mMKmOHqftVfh8C6GZU+Z+1WlNprQcmD9W3Ietd1bcvcfeiKQKaKHzZmTf719R96acT3j3NCNb+U05bOnf9K2ow5SCBilnWfID6mpRjU4K581H0NCpaEmeQpyWYMjdFKiql8j7uMUiMjeOf8A9aDhP2T5sfoBRLWRpyAilVABETToXBvsFyj9gc9S59e1XFQR8KjwFGZRSBQKBqFewIWY19aBV5MVoxh6T8IOQ9KSy0qKZTpapzYfhVt+G7q44ep5jspBgxy9zWs6C7R6q4bLHsXPh7nG7/ENPECqw4emdSQZGhGoPIjcajKlOLiy8WThJSR6uTVL0pwi3LDMSqm32lJIA71k8x7gVQYnpZeKBUVVaAGc9okxqQNw85rLbSxBftXLju53ZiSqjjA3DyrixeNJSUm6O/L5cJRcVsO2TcR7jIymOrdlmRLCI05RPpVkyyI8qzey7hW4jTI1QdwYER/5VdPjQCRB0MV7WJWqR4GeM5T18FKRGlWOzdr3LZVAcykwFOpH8J3+VVGKxH6xtIGafXX60/CXmF606iSHQqN2Ykjs08sFKLTRcYtPZ6J0Te2UchgXJ7S/mCjdp4k61flqwN/E2bjSc+GvDWSCBPiI9dPOj9ldKTot7Uftga/3l4+I9K8PL48pfdH9j1/H8uNKD1+TXLcKmQYPdVhh9qg9m4NOcSPMVS276uoZGDKdxBkUjOAJOgG+uZWjukoyRabfTBtZFq8wyXGGQA6qQfjUj4QOPDeONebbWwl+yzWbgXqwcoYFSSn5GEGdRHCiMbi8zs54/COSjdVPibJcyT4Cvb8Xx5cTxvIzRTINn3zbvC2kFHdiSdToNIPlWhKCqVMEoZXEyuo13TRgvvzn0rol4sns5454ey+t/CvgPlS5dZ8qrLW0GAAKg6DuqysdY2+3H95flvrCeGUOyo5Iy6JAByX0FVW1NpXEfKhCjKDooneefhVybLcqp9pYK49zsox7I4abzxqYd7HIEwu0LpuLmuMROo3D0FaHOedUh2JfykplVo0kj/ia7ZO1izdTe7FwGNdJPI8j86qUW9oSfplnj7fWW3TTVTwG/ePeqzoviJtFCBKMR5NqPfNV4bLcqzWDXqsa9s6C4CQP/Mf6hSjbTX9QfaYRf2m4uOIXKucAAHWJiSTzip9i4h7lss8HtsF0jQR9Zqq2qCpdo0LHXhxO/wAquNi2CthNDqubd+12vrTkko2EW3IPCCJM0uQcz6D70opGWsrLMjXN3Uk11bFDE+KpqiUa+dTGgBJpK6uoA40008W2PA+lOXCueHrStCtFoqaDwperFcjniKkiucyIjbpptipytNIpWIgKVG9uiCKYwp2MDdKExGHDCD/xVk60M61SY7KdMGQZJ48OPjRqW5qdbcmBRK2or0/Fg3GzWG9mb2jAuEDgAPOJpcIct+0WMQ9sknQAZlJ8qjc57h/ef2J+1SbUtw471+RP8qco8kzN7tm325fC2i5trcAjQmNCYkGD7V58Sx+JiRynT0rULiLbYVLYmYE+OXtHw1IrMXEIYrG4xP1rzsC43Ev6dRTZcbD2g9tv1QKg/FJJVj3g/Ots2La4mVkKSe1qCCBwHHWsP0csq14Bj8ILKvAsI+W/yrcolGTFByUmtlLLKK4p6FFkHeAfECmts22fyx4Ej+VFItSqtaKco9MwaT7Kp9iqfhYjxAP2oTE7MyfFcQeLZT6Vd4nCC4ILOv8ACxX23VUXujfFLn+IfUfato+RJeyHji/R2H2SHUMLgM7oBPziiE2e9s5iwYd7sv8AKo7Wz71tQAZjkZHoaAx63CwLg7o1EVouU9WmjNtR9Mtl2ogMEehBHqCahxe3lUwi5tN8n5RVRaTfTLqa1a8WJLzyJsRt2624hfAR/P3oPav64AsAHA0cSCRybn9KjvW7k9lQR4gfOpbef8ygeYPsDVrFFOqJ+o+7JtkdJmt/q74JI0VuPgefjUPSPHqblm/bkMhEjdIU5h/qHnQu0sOChaNV1HgN/tNE9HcI97MbdpndR+VScszBJ4bjHgaxliUWarI2ibpXtFbqILclRJJgjUxuneYmtXhMTbZFNtgVKjL4RWYw+GW6wtu4RSYLkEhe8gVUsws3GRXYpmIVjCnfAaATAPjyrN406VlKb7PQDbU/8134cc6xyYy4Nzt6z86nXa10cQfEfah+NL1QLMitArqeLZqRLHfXO5I6eSHpheZou3hFI3mn27JipFQ1i5sy5MjXCIOFTJbUcKcBSlam2KxCg5VwpYrqQCVwrhUgE0wI2FJFKwpQ1AEZppUGpK4pO6gAdhUW4zAPcRNEhNYie6iV2Zc4wPEyfb71SsYEXzbhEaf17UPjHy23bkpjxjT3oo28pI5E1WbdeLUftMB6dr6V7uOPHEv5G/USp2RazXVHIE+gj5kVZbYwJZkWCDmKmREAiZ9AaK6E2wGuuyhhCprB3kk6HwWrTbm0Q10WRMBM4PMkkewHua5JZkk4pEQpqilxFtEiNBl3dywJ+VUuPdZDDiNR4f17VNisWpNu2C0A6k7+0Y+Wvn3UdjcGpQgASF7P93X6+9cihUrNXNuPFFLhcYbbrcUaqQfHmPMSPOvTsM6uquplWAYHuIkV5ZWs6J7RJQ25+AyP4Wkx6z7VpOOjBmxUVIooSzdJopGrIQ+lArga6aQzq410100xA9zB223oPLT5ULd2Oh3Mw9CKsC1NzVccs49Mhwi+0UtzY7jcVPqDQd3A3F3ofn8q000k1tHypLsh4Y+jIOvOh7OHS2QyLlKmVIZwQd0jXfqfU1s7qK3xKD4gGhLuzLTcCvgfvNaryov9SI+jJdMzgeNw+f3oa/hlf4h71oL2xuT+RH1FB39mXF3geIIrVTxy+CHCaKxUgASdNNda6pSKaVitaIs//9k="
    },
    {
        id: 16,
        name: "Mario Kart 8 Deluxe",
        platform: "Nintendo Switch",
        genre: "Racing",
        releaseDate: "2017-04-28",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.9,
        image: "https://i.ytimg.com/vi/renTepiVw3M/maxresdefault.jpg"
    },
    {
        id: 17,
        name: "The Last of Us Part II",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2020-06-19",
        rating: "Mature",
        developer: "Naughty Dog",
        ratingScore: 4.9,
        image: "https://www.hardware.com.br/static/wp/2020/11/18/The-Last-of-Us-Part-II_Capa.jpg?fm=pjpg&ixlib=php-3.3.0"
    },
    {
        id: 18,
        name: "Super Mario 3D All-Stars",
        platform: "Nintendo Switch",
        genre: "Platformer",
        releaseDate: "2020-09-18",
        rating: "Everyone",
        developer: "Nintendo",
        ratingScore: 4.7,
        image: "https://gkpb.com.br/wp-content/uploads/2020/09/super-mario-3d-all-stars-geek-publicitario.jpg"
    },
    {
        id: 19,
        name: "Uncharted 4: A Thief's End",
        platform: "PlayStation 4",
        genre: "Action-Adventure",
        releaseDate: "2016-05-10",
        rating: "Teen",
        developer: "Naughty Dog",
        ratingScore: 4.8,
        image: "https://1.bp.blogspot.com/-SGHwj8vE5vQ/Vz8PQhhbZRI/AAAAAAAACLs/LXmwfUiV6Uko9lvpcQUVvUPYTdkLYg1yACLcB/w1200-h630-p-k-no-nu/Uncharted-4-capa.jpg"
    },
    {
        id: 20,
        name: "Splatoon 2",
        platform: "Nintendo Switch",
        genre: "Third-Person Shooter",
        releaseDate: "2017-07-21",
        rating: "Everyone 10+",
        developer: "Nintendo",
        ratingScore: 4.8,
        image: "https://2.bp.blogspot.com/-UdNjECLi8DA/WYDVGGtL0sI/AAAAAAAAGRw/b6_0Xom8PgMg3ggok42ug5fR-2E9_ngKACK4BGAYYCw/s1600/%255BAn%25C3%25A1lise%255DSplatoon_2.jpg"
    },
    {
        id: 21,
        name: "Bloodborne",
        platform: "PlayStation 4",
        genre: "Action RPG",
        releaseDate: "2015-03-24",
        rating: "Mature",
        developer: "FromSoftware",
        ratingScore: 4.8,
        image: "https://t2.tudocdn.net/593327?w=1920"
    },
    {
        id: 22,
        name: "Fire Emblem: Three Houses",
        platform: "Nintendo Switch",
        genre: "Tactical RPG",
        releaseDate: "2019-07-26",
        rating: "Teen",
        developer: "Intelligent Systems",
        ratingScore: 4.9,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878"
    },
    {
        id: 23,
        name: "Persona 5 Royal",
        platform: "PlayStation 4",
        genre: "RPG",
        releaseDate: "2020-03-31",
        rating: "Mature",
        developer: "Atlus",
        ratingScore: 4.9,
        image: "https://1.bp.blogspot.com/-UDYIpLr0FR4/XpNW2w-DJtI/AAAAAAAAECE/EP6hzMr4K8o5VG0vNXKwWmRlxZoemSFoACNcBGAsYHQ/s1600/capa.jpg"
    },

    {
        id: 25,
        name: "Call of Duty: Warzone",
        platform: "PlayStation 5",
        genre: "Battle Royale",
        releaseDate: "2020-03-10",
        rating: "Mature",
        developer: "Infinity Ward, Raven Software",
        ratingScore: 4.5,
        image: "https://upload.wikimedia.org/wikipedia/pt/5/5f/COD_Warzone.jpg"
    },
  
    {
        id: 28,
        name: "Overwatch",
        platform: "PC",
        genre: "Hero Shooter",
        releaseDate: "2016-05-24",
        rating: "Teen",
        developer: "Blizzard Entertainment",
        ratingScore: 4.7,
        image: "https://meups.com.br/wp-content/uploads/2016/04/Overwatch-capa-pr%C3%A9via.jpg"
    },
    {
        id: 29,
        name: "FIFA 22",
        platform: "PlayStation 5",
        genre: "Sports",
        releaseDate: "2021-10-01",
        rating: "Everyone",
        developer: "EA Vancouver",
        ratingScore: 4.6,
        image: "https://www.actigamer.pt/cnt/uploads/I21P005FIFA22.jpg"
    },
    {
        id: 30,
        name: "League of Legends",
        platform: "PC",
        genre: "MOBA",
        releaseDate: "2009-10-27",
        rating: "Teen",
        developer: "Riot Games",
        ratingScore: 4.6,
        image: "https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2021/09/lol-capa.png?fit=1200%2C675&ssl=1"
    },
    {
        id: 31,
        name: "Pokémon Sword and Shield",
        platform: "Nintendo Switch",
        genre: "Role-Playing",
        releaseDate: "2019-11-15",
        rating: "Everyone",
        developer: "Game Freak",
        ratingScore: 4.7,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000026262/4a7c422cd8270ae2de1ac4bf9d944137b8fe51d822694224de24ddda299615fb"
    },

];



export default games;