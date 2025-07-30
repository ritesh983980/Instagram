// === FONT MAPPINGS (JSON content) ===
// This data is specific to the stylish fonts generator, so it's good to keep it here.
const FONT_DATA = [
    {
        "id": 1,
        "name": "Bold Sans",
        "category": "Headings",
        "unicodeType": "Mathematical Bold Sans-serif",
        "worksOn": ["Instagram", "WhatsApp", "Facebook", "Twitter"],
        "mapping": {
            "A": "𝗔", "B": "𝗕", "C": "𝗖", "D": "𝗗", "E": "𝗘", "F": "𝗙", "G": "𝗚", "H": "𝗛", "I": "𝗜", "J": "𝗝", "K": "𝗞", "L": "𝗟", "M": "𝗠",
            "N": "𝗡", "O": "𝗢", "P": "𝗣", "Q": "𝗤", "R": "𝗥", "S": "𝗦", "T": "𝗧", "U": "𝗨", "V": "𝗩", "W": "𝗪", "X": "𝗫", "Y": "𝗬", "Z": "𝗭",
            "a": "𝗮", "b": "𝗯", "c": "𝗰", "d": "𝗱", "e": "𝗲", "f": "𝗳", "g": "𝗴", "h": "𝗵", "i": "𝗶", "j": "𝗷", "k": "𝗸", "l": "𝗹", "m": "𝗺",
            "n": "𝗻", "o": "𝗼", "p": "𝗽", "q": "𝗾", "r": "𝗿", "s": "𝘀", "t": "𝘁", "u": "𝘂", "v": "𝘃", "w": "𝘄", "x": "𝘅", "y": "𝘆", "z": "𝘇",
            "0": "𝟬", "1": "𝟭", "2": "𝟮", "3": "𝟯", "4": "𝟰", "5": "𝟱", "6": "𝟲", "7": "𝟳", "8": "𝟴", "9": "𝟵"
        }
    },
    {
        "id": 2,
        "name": "Italic Serif",
        "category": "Romantic bios",
        "unicodeType": "Mathematical Italic Serif",
        "worksOn": ["Instagram", "WhatsApp", "Facebook"],
        "mapping": {
            "A": "𝐴", "B": "𝐵", "C": "𝐶", "D": "𝐷", "E": "𝐸", "F": "𝐹", "G": "𝐺", "H": "𝐻", "I": "𝐼", "J": "𝐽", "K": "𝐾", "L": "𝐿", "M": "𝑀",
            "N": "𝑁", "O": "𝑂", "P": "𝑃", "Q": "𝑄", "R": "𝑅", "S": "𝑆", "T": "𝑇", "U": "𝑈", "V": "𝑉", "W": "𝑊", "X": "𝑋", "Y": "𝑌", "Z": "𝑍",
            "a": "𝑎", "b": "𝑏", "c": "𝑐", "d": "𝑑", "e": "𝑒", "f": "𝑓", "g": "𝑔", "h": "ℎ", "i": "𝑖", "j": "𝑗", "k": "𝑘", "l": "𝑙", "m": "𝑚",
            "n": "𝑛", "o": "𝑜", "p": "𝑝", "q": "𝑞", "r": "𝑟", "s": "𝑠", "t": "𝑡", "u": "𝑢", "v": "𝑣", "w": "𝑤", "x": "𝑥", "y": "𝑦", "z": "𝑧",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 3,
        "name": "Bubble Text",
        "category": "Funny bios",
        "unicodeType": "Circled Unicode",
        "worksOn": ["Instagram", "WhatsApp", "Facebook"],
        "mapping": {
            "A": "Ⓐ", "B": "Ⓑ", "C": "Ⓒ", "D": "Ⓓ", "E": "Ⓔ", "F": "Ⓕ", "G": "Ⓖ", "H": "Ⓗ", "I": "Ⓘ", "J": "Ⓙ", "K": "Ⓚ", "L": "Ⓛ", "M": "Ⓜ",
            "N": "Ⓝ", "O": "Ⓞ", "P": "Ⓟ", "Q": "Ⓠ", "R": "Ⓡ", "S": "Ⓢ", "T": "Ⓣ", "U": "Ⓤ", "V": "Ⓥ", "W": "Ⓦ", "X": "Ⓧ", "Y": "Ⓨ", "Z": "Ⓩ",
            "a": "ⓐ", "b": "ⓑ", "c": "ⓒ", "d": "ⓓ", "e": "ⓔ", "f": "ⓕ", "g": "ⓖ", "h": "ⓗ", "i": "ⓘ", "j": "ⓙ", "k": "ⓚ", "l": "ⓛ", "m": "ⓜ",
            "n": "ⓝ", "o": "ⓞ", "p": "ⓟ", "q": "ⓠ", "r": "ⓡ", "s": "ⓢ", "t": "ⓣ", "u": "ⓤ", "v": "ⓥ", "w": "ⓦ", "x": "ⓧ", "y": "ⓨ", "z": "ⓩ",
            "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨"
        }
    },
    {
        "id": 4,
        "name": "Bold Italic Sans",
        "category": "Modern",
        "unicodeType": "Mathematical Bold Italic Sans-serif",
        "worksOn": ["Instagram", "WhatsApp", "Facebook"],
        "mapping": {
            "A": "𝘼", "B": "𝘽", "C": "𝘾", "D": "𝘿", "E": "𝙀", "F": "𝙁", "G": "𝙂", "H": "𝙃", "I": "𝙄", "J": "𝙅", "K": "𝙆", "L": "𝙇", "M": "𝙈",
            "N": "𝙉", "O": "𝙊", "P": "𝙋", "Q": "𝙌", "R": "𝙍", "S": "𝙎", "T": "𝙏", "U": "𝙐", "V": "𝙑", "W": "𝙒", "X": "𝙓", "Y": "𝙔", "Z": "𝙕",
            "a": "𝙖", "b": "𝙗", "c": "𝙘", "d": "𝙙", "e": "𝙚", "f": "𝙛", "g": "𝙜", "h": "𝙝", "i": "𝙞", "j": "𝙟", "k": "𝙠", "l": "𝙡", "m": "𝙢",
            "n": "𝙣", "o": "𝙤", "p": "𝙥", "q": "𝙦", "r": "𝙧", "s": "𝙨", "t": "𝙩", "u": "𝙪", "v": "𝙫", "w": "𝙬", "x": "𝙭", "y": "𝙮", "z": "𝙯",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 5,
        "name": "Script",
        "category": "Elegant",
        "unicodeType": "Mathematical Script",
        "worksOn": ["Instagram", "WhatsApp", "Facebook"],
        "mapping": {
            "A": "𝓐", "B": "𝓑", "C": "𝓒", "D": "𝓓", "E": "𝓔", "F": "𝓕", "G": "𝓖", "H": "𝓗", "I": "𝓘", "J": "𝓙", "K": "𝓚", "L": "𝓛", "M": "𝓜",
            "N": "𝓝", "O": "𝓞", "P": "𝓟", "Q": "𝓠", "R": "𝓡", "S": "𝓢", "T": "𝓣", "U": "𝓤", "V": "𝓥", "W": "𝓦", "X": "𝓧", "Y": "𝓨", "Z": "𝓩",
            "a": "𝓪", "b": "𝓫", "c": "𝓬", "d": "𝓭", "e": "𝓮", "f": "𝓯", "g": "𝓰", "h": "𝓱", "i": "𝓲", "j": "𝓳", "k": "𝓴", "l": "𝓵", "m": "𝓶",
            "n": "𝓷", "o": "𝓸", "p": "𝓹", "q": "𝓺", "r": "𝓻", "s": "𝓼", "t": "𝓽", "u": "𝓾", "v": "𝓿", "w": "𝔀", "x": "𝔁", "y": "𝔂", "z": "𝔃",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 6,
        "name": "Double Struck",
        "category": "Academic/Unique",
        "unicodeType": "Mathematical Double-struck",
        "worksOn": ["Instagram", "WhatsApp", "Twitter"],
        "mapping": {
            "A": "𝔸", "B": "𝔹", "C": "ℂ", "D": "𝔻", "E": "𝔼", "F": "𝔽", "G": "𝔾", "H": "ℍ", "I": "𝕀", "J": "𝕁", "K": "𝕂", "L": "𝕃", "M": "𝕄",
            "N": "ℕ", "O": "𝕆", "P": "ℙ", "Q": "ℚ", "R": "ℝ", "S": "𝕊", "T": "𝕋", "U": "𝕌", "V": "𝕍", "W": "𝕎", "X": "𝕏", "Y": "𝕐", "Z": "ℤ",
            "a": "𝕒", "b": "𝕓", "c": "𝕔", "d": "𝕕", "e": "𝕖", "f": "𝕗", "g": "𝕘", "h": "𝕙", "i": "𝕚", "j": "𝕛", "k": "𝕜", "l": "𝕝", "m": "𝕞",
            "n": "𝕟", "o": "𝕠", "p": "𝕡", "q": "𝕢", "r": "𝕣", "s": "𝕤", "t": "𝕥", "u": "𝕦", "v": "𝕧", "w": "𝕨", "x": "𝕩", "y": "𝕪", "z": "𝕫",
            "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛", "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡"
        }
    },
    {
        "id": 7,
        "name": "Fullwidth",
        "category": "Aesthetic/Unique",
        "unicodeType": "Fullwidth Unicode",
        "worksOn": ["Instagram", "WhatsApp", "Twitter"],
        "mapping": {
            "A": "Ａ", "B": "Ｂ", "C": "Ｃ", "D": "Ｄ", "E": "Ｅ", "F": "Ｆ", "G": "Ｇ", "H": "Ｈ", "I": "Ｉ", "J": "Ｊ", "K": "Ｋ", "L": "Ｌ", "M": "Ｍ",
            "N": "Ｎ", "O": "Ｏ", "P": "Ｐ", "Q": "Ｑ", "R": "Ｒ", "S": "Ｓ", "T": "Ｔ", "U": "Ｕ", "V": "Ｖ", "W": "Ｗ", "X": "Ｘ", "Y": "Ｙ", "Z": "Ｚ",
            "a": "ａ", "b": "ｂ", "c": "ｃ", "d": "ｄ", "e": "ｅ", "f": "ｆ", "g": "ｇ", "h": "ｈ", "i": "ｉ", "j": "ｊ", "k": "ｋ", "l": "ｌ", "m": "ｍ",
            "n": "ｎ", "o": "ｏ", "p": "ｐ", "q": "ｑ", "r": "ｒ", "s": "ｓ", "t": "ｔ", "u": "ｕ", "v": "ｖ", "w": "ｗ", "x": "ｘ", "y": "ｙ", "z": "ｚ",
            "0": "０", "1": "１", "2": "２", "3": "３", "4": "４", "5": "５", "6": "６", "7": "７", "8": "８", "9": "９"
        }
    },
    {
        "id": 8,
        "name": "Monospace",
        "category": "Tech/Gaming",
        "unicodeType": "Monospace Unicode",
        "worksOn": ["Instagram", "WhatsApp", "Discord"],
        "mapping": {
            "A": "𝙰", "B": "𝙱", "C": "𝙲", "D": "𝙳", "E": "𝙴", "F": "𝙵", "G": "𝙶", "H": "𝙷", "I": "𝙸", "J": "𝙹", "K": "𝙺", "L": "𝙻", "M": "𝙼",
            "N": "𝙽", "O": "𝙾", "P": "𝙿", "Q": "𝚀", "R": "𝚁", "S": "𝚂", "T": "𝚃", "U": "𝚄", "V": "𝚅", "W": "𝚆", "X": "𝚇", "Y": "𝚈", "Z": "𝚉",
            "a": "𝚊", "b": "𝚋", "c": "𝚌", "d": "𝚍", "e": "𝚎", "f": "𝚏", "g": "𝚐", "h": "𝚑", "i": "𝚒", "j": "𝚓", "k": "𝚔", "l": "𝚕", "m": "𝚖",
            "n": "𝚗", "o": "𝚘", "p": "𝚙", "q": "𝚚", "r": "𝚛", "s": "𝚜", "t": "𝚝", "u": "𝚞", "v": "𝚟", "w": "𝚠", "x": "𝚡", "y": "𝚢", "z": "𝚣",
            "0": "𝟶", "1": "𝟷", "2": "𝟸", "3": "𝟹", "4": "𝟺", "5": "𝟻", "6": "𝟼", "7": "𝟽", "8": "𝟾", "9": "𝟿"
        }
    },
    {
        "id": 9,
        "name": "Squared Text",
        "category": "Bold/Unique",
        "unicodeType": "Squared Unicode",
        "worksOn": ["Instagram", "WhatsApp", "Twitter"],
        "mapping": {
            "A": "🄰", "B": "🄱", "C": "🄲", "D": "🄳", "E": "🄴", "F": "🄵", "G": "🄶", "H": "🄷", "I": "🄸", "J": "🄹", "K": "🄺", "L": "🄻", "M": "🄼",
            "N": "🄽", "O": "🄾", "P": "🄿", "Q": "🅀", "R": "🅁", "S": "🅂", "T": "🅃", "U": "🅄", "V": "🅅", "W": "🅆", "X": "🅇", "Y": "🅈", "Z": "🅉",
            "a": "🄰", "b": "🄱", "c": "🄲", "d": "🄳", "e": "🄴", "f": "🄵", "g": "🄶", "h": "🄷", "i": "🄸", "j": "🄹", "k": "🄺", "l": "🄻", "m": "🄼",
            "n": "🄽", "o": "🄾", "p": "🄿", "q": "🅀", "r": "🅁", "s": "🅂", "t": "🅃", "u": "🅄", "v": "🅅", "w": "🅆", "x": "🅇", "y": "🅈", "z": "🅉",
            "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨"
        }
    },
    {
        "id": 10,
        "name": "Underline",
        "category": "Emphasis",
        "unicodeType": "Combining Diacritics",
        "mapping": {}, // This will be handled by a special function
        "specialProcessor": "underline"
    },
    {
        "id": 11,
        "name": "Italic Sans",
        "category": "Stylish bios",
        "unicodeType": "Mathematical Italic Sans-serif",
        "worksOn": ["Instagram", "WhatsApp", "Facebook"],
        "mapping": {
            "A": "𝘈", "B": "𝘉", "C": "𝘊", "D": "𝘋", "E": "𝘌", "F": "𝘍", "G": "𝘎", "H": "𝘏", "I": "𝘐", "J": "𝘑", "K": "𝘒", "L": "𝘓", "M": "𝘔",
            "N": "𝘕", "O": "𝘖", "P": "𝘗", "Q": "𝘘", "R": "𝘙", "S": "𝘚", "T": "𝘛", "U": "𝘜", "V": "𝘝", "W": "𝘞", "X": "𝘟", "Y": "𝘠", "Z": "𝘡",
            "a": "𝘢", "b": "𝘣", "c": "𝘤", "d": "𝘥", "e": "𝘦", "f": "𝘧", "g": "𝘨", "h": "𝘩", "i": "𝘪", "j": "𝘫", "k": "𝘬", "l": "𝘭", "m": "𝘮",
            "n": "𝘯", "o": "𝘰", "p": "𝘱", "q": "𝘲", "r": "𝘳", "s": "𝘴", "t": "𝘵", "u": "𝘶", "v": "𝘷", "w": "𝘸", "x": "𝘹", "y": "𝘺", "z": "𝘻",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 12,
        "name": "Small Caps",
        "category": "Subtle Headings",
        "unicodeType": "Small Capitals Unicode",
        "worksOn": ["Instagram", "Twitter"],
        "mapping": {
            "A": "ᴀ", "B": "ʙ", "C": "ᴄ", "D": "ᴅ", "E": "ᴇ", "F": "ꜰ", "G": "ɢ", "H": "ʜ", "I": "ɪ", "J": "ᴊ", "K": "ᴋ", "L": "ʟ", "M": "ᴍ",
            "N": "ɴ", "O": "ᴏ", "P": "ᴘ", "Q": "ǫ", "R": "ʀ", "S": "s", "T": "ᴛ", "U": "ᴜ", "V": "ᴠ", "W": "ᴡ", "X": "x", "Y": "ʏ", "Z": "ᴢ",
            "a": "ᴀ", "b": "ʙ", "c": "ᴄ", "d": "ᴅ", "e": "ᴇ", "f": "ꜰ", "g": "ɢ", "h": "ʜ", "i": "ɪ", "j": "ᴊ", "k": "ᴋ", "l": "ʟ", "m": "ᴍ",
            "n": "ɴ", "o": "ᴏ", "p": "ᴘ", "q": "ǫ", "r": "ʀ", "s": "s", "t": "ᴛ", "u": "ᴜ", "v": "ᴠ", "w": "ᴡ", "x": "x", "y": "ʏ", "z": "ᴢ",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 13,
        "name": "Superscript",
        "category": "Tiny Text",
        "unicodeType": "Superscript Unicode",
        "worksOn": ["Instagram", "Twitter"],
        "mapping": {
            "a": "ᵃ", "b": "ᵇ", "c": "ᶜ", "d": "ᵈ", "e": "ᵉ", "f": "ᶠ", "g": "ᵍ", "h": "ʰ", "i": "ⁱ", "j": "ʲ", "k": "ᵏ", "l": "ˡ", "m": "ᵐ",
            "n": "ⁿ", "o": "ᵒ", "p": "ᵖ", "q": "۹", "r": "ʳ", "s": "ˢ", "t": "ᵗ", "u": "ᵘ", "v": "ᵛ", "w": "ʷ", "x": "ˣ", "y": "ʸ", "z": "ᶻ",
            "A": "ᴬ", "B": "ᴮ", "C": "ᶜ", "D": "ᴰ", "E": "ᴱ", "F": "ᶠ", "G": "ᴳ", "H": "ᴴ", "I": "ᴵ", "J": "ᴶ", "K": "ᴷ", "L": "ᴸ", "M": "ᴹ",
            "N": "ᴺ", "O": "ᴼ", "P": "ᴾ", "Q": "Q", "R": "ᴿ", "S": "ˢ", "T": "ᵀ", "U": "ᵁ", "V": "ⱽ", "W": "ᵂ", "X": "ˣ", "Y": "ʸ", "Z": "ᶻ",
            "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
            "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾"
        }
    },
    {
        "id": 14,
        "name": "Subscript",
        "category": "Tiny Text",
        "unicodeType": "Subscript Unicode",
        "worksOn": ["Instagram", "Twitter"],
        "mapping": {
            "a": "ₐ", "b": "ᵦ", "c": "𝒸", "d": "ᑯ", "e": "ₑ", "f": "բ", "g": "₉", "h": "ₕ", "i": "ᵢ", "j": "ⱼ", "k": "ₖ", "l": "ₗ", "m": "ₘ",
            "n": "ₙ", "o": "ₒ", "p": "ₚ", "q": "૧", "r": "ᵣ", "s": "ₛ", "t": "ₜ", "u": "ᵤ", "v": "ᵥ", "w": "ᵥᵥ", "x": "ₓ", "y": "ᵧ", "z": "₂",
            "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
            "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎"
        }
    },
    {
        "id": 15,
        "name": "Strikethrough",
        "category": "Correction/Deleted",
        "unicodeType": "Combining Diacritics",
        "mapping": {},
        "specialProcessor": "strikethrough"
    },
    {
        "id": 16,
        "name": "Currency Symbols",
        "category": "Money/Finance",
        "unicodeType": "Currency Unicode Symbols",
        "worksOn": ["Instagram", "WhatsApp", "LinkedIn"],
        "mapping": {
            "A": "₳", "B": "฿", "C": "₵", "D": "₫", "E": "€", "F": "₣", "G": "₲", "H": "₴", "I": "Ⱡ", "J": "J", "K": "₭", "L": "Ł", "M": "₥",
            "N": "₦", "O": "Ø", "P": "₱", "Q": "Q", "R": "₹", "S": "$", "T": "₮", "U": "ⱡ", "V": "V", "W": "₩", "X": "X", "Y": "¥", "Z": "Z",
            "a": "₳", "b": "฿", "c": "₵", "d": "₫", "e": "€", "f": "₣", "g": "₲", "h": "₴", "i": "Ⱡ", "j": "j", "k": "₭", "l": "Ł", "m": "₥",
            "n": "₦", "o": "Ø", "p": "₱", "q": "q", "r": "₹", "s": "$", "t": "₮", "u": "ⱡ", "v": "v", "w": "₩", "x": "x", "y": "y", "z": "z"
            // Numbers are typically not mapped for currency symbols directly, can add if needed
        }
    },
    {
        "id": 17,
        "name": "Boxed Light",
        "category": "Decorated",
        "unicodeType": "Box Drawing Unicode",
        "worksOn": ["Instagram", "Discord"],
        "mapping": {
            "A": "🄰", "B": "🄱", "C": "🄲", "D": "🄳", "E": "🄴", "F": "🄵", "G": "🄶", "H": "🄷", "I": "🄸", "J": "🄹", "K": "🄺", "L": "🄻", "M": "🄼",
            "N": "🄽", "O": "🄾", "P": "🄿", "Q": "🅀", "R": "🅁", "S": "🅂", "T": "🅃", "U": "🅄", "V": "🅅", "W": "🅆", "X": "🅇", "Y": "🅈", "Z": "🅉",
            "a": "ⓐ", "b": "ⓑ", "c": "ⓒ", "d": "ⓓ", "e": "ⓔ", "f": "ⓕ", "g": "ⓖ", "h": "ⓗ", "i": "ⓘ", "j": "ⓙ", "k": "ⓚ", "l": "ⓛ", "m": "ⓜ",
            "n": "ⓝ", "o": "ⓞ", "p": "ⓟ", "q": "ⓠ", "r": "ⓡ", "s": "ⓢ", "t": "ⓣ", "u": "ⓤ", "v": "ⓥ", "w": "ⓦ", "x": "ⓧ", "y": "ⓨ", "z": "ⓩ",
            "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨"
        }
    },
    {
        "id": 18,
        "name": "Inverted Square",
        "category": "Unique/Tech",
        "unicodeType": "Negative Squared Unicode",
        "worksOn": ["Instagram", "Discord"],
        "mapping": {
            "A": "🅐", "B": "🅑", "C": "🅒", "D": "🅓", "E": "🅔", "F": "🅕", "G": "🅖", "H": "🅗", "I": "🅘", "J": "🅙", "K": "🅚", "L": "🅛", "M": "🅜",
            "N": "🅝", "O": "🅞", "P": "🅟", "Q": "🅠", "R": "🅡", "S": "🅢", "T": "🅣", "U": "🅤", "V": "🅥", "W": "🅦", "X": "🅧", "Y": "🅨", "Z": "🅩",
            "a": "🅐", "b": "🅑", "c": "🅒", "d": "🅓", "e": "🅔", "f": "🅕", "g": "🅖", "h": "🅗", "i": "🅘", "j": "🅙", "k": "🅚", "l": "🅛", "m": "🅜",
            "n": "🅝", "o": "🅞", "p": "🅟", "q": "🅠", "r": "🅡", "s": "🅢", "t": "🅣", "u": "🅤", "v": "🅥", "w": "🅦", "x": "🅧", "y": "🅨", "z": "🅩",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 19,
        "name": "Cursive Fancy",
        "category": "Elegant/Artistic",
        "unicodeType": "Cursive Unicode",
        "worksOn": ["Instagram", "Facebook"],
        "mapping": {
            "A": "𝒶", "B": "𝒷", "C": "𝒸", "D": "𝒹", "E": "𝑒", "F": "𝒻", "G": "𝑔", "H": "𝒽", "I": "𝒾", "J": "𝒿", "K": "𝓀", "L": "𝓁", "M": "𝓂",
            "N": "𝓃", "O": "𝑜", "P": "𝓅", "Q": "𝓆", "R": "𝓇", "S": "𝓈", "T": "𝓉", "U": "𝓊", "V": "𝓋", "W": "𝓌", "X": "𝓍", "Y": "𝓎", "Z": "𝓏",
            "a": "𝒶", "b": "𝒷", "c": "𝒸", "d": "𝒹", "e": "𝑒", "f": "𝒻", "g": "𝑔", "h": "𝒽", "i": "𝒾", "j": "𝒿", "k": "𝓀", "l": "𝓁", "m": "𝓂",
            "n": "𝓃", "o": "𝑜", "p": "𝓅", "q": "𝓆", "r": "𝓇", "s": "𝓈", "t": "𝓉", "u": "𝓊", "v": "𝓋", "w": "𝓌", "x": "𝓍", "y": "𝓎", "z": "𝓏",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 20,
        "name": "Mathematical Bold Italic Serif",
        "category": "Scientific/Formal",
        "unicodeType": "Mathematical Bold Italic Serif",
        "worksOn": ["Instagram", "WhatsApp"],
        "mapping": {
            "A": "𝑨", "B": "𝑩", "C": "𝑪", "D": "𝑫", "E": "𝑬", "F": "𝑭", "G": "𝑮", "H": "𝑯", "I": "𝑰", "J": "𝑱", "K": "𝑲", "L": "𝑳", "M": "𝑴",
            "N": "𝑵", "O": "𝑶", "P": "𝑷", "Q": "𝑸", "R": "𝑹", "S": "𝑺", "T": "𝑻", "U": "𝑼", "V": "𝑽", "W": "𝑾", "X": "𝑿", "Y": " Y", "Z": "𝑾",
            "a": "𝒂", "b": "𝒃", "c": "𝒄", "d": "𝒅", "e": "𝒆", "f": "𝒇", "g": "𝒈", "h": "𝒉", "i": "𝒊", "j": "𝒋", "k": "𝒌", "l": "𝒍", "m": "𝒎",
            "n": "𝒏", "o": "𝒐", "p": "𝒑", "q": "𝒒", "r": "𝒓", "s": "𝒔", "t": "𝒕", "u": "𝒖", "v": "𝒗", "w": "𝒘", "x": "𝒙", "y": "𝒚", "z": "𝒛",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    // --- New Fonts (IDs 21-30) ---
    {
        "id": 21,
        "name": "Fraktur (Gothic)",
        "category": "Old/Mysterious",
        "unicodeType": "Mathematical Fraktur",
        "worksOn": ["Instagram", "WhatsApp"],
        "mapping": {
            "A": "𝔄", "B": "𝔅", "C": "ℭ", "D": "𝔇", "E": "𝔈", "F": "𝔉", "G": "𝔊", "H": "ℌ", "I": "ℑ", "J": "𝔍", "K": "𝔎", "L": "𝔏", "M": "𝔐",
            "N": "𝔑", "O": "𝔒", "P": "𝔓", "Q": "𝔔", "R": "ℜ", "S": "𝔖", "T": "𝔗", "U": "𝔘", "V": "𝔙", "W": "𝔚", "X": "𝔛", "Y": "𝔜", "Z": "ℨ",
            "a": "𝔞", "b": "𝔟", "c": "𝔠", "d": "𝔡", "e": "𝔢", "f": "𝔣", "g": "𝔤", "h": "𝔥", "i": "𝔦", "j": "𝔧", "k": "𝔨", "l": "𝔩", "m": "𝔪",
            "n": "𝔫", "o": "𝔬", "p": "𝔭", "q": "𝔮", "r": "𝔯", "s": "𝔰", "t": "𝔱", "u": "𝔲", "v": "𝔳", "w": "𝔴", "x": "𝔵", "y": "𝔶", "z": "𝔷",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },
    {
        "id": 22,
        "name": "Monospace Bold",
        "category": "Tech/Gaming",
        "unicodeType": "Mathematical Monospace Bold",
        "worksOn": ["Instagram", "Discord"],
        "mapping": {
            "A": "𝐀", "B": "𝐁", "C": "𝐂", "D": "𝐃", "E": "𝐄", "F": "𝐅", "G": "𝐆", "H": "𝐇", "I": "𝐈", "J": "𝐉", "K": "𝐊", "L": "𝐋", "M": "𝐌",
            "N": "𝐍", "O": "𝐎", "P": "𝐏", "Q": "𝐐", "R": "𝐑", "S": "𝐒", "T": "𝐓", "U": "𝐔", "V": "𝐕", "W": "𝐖", "X": "𝐗", "Y": "𝐘", "Z": "𝐙",
            "a": "𝐚", "b": "𝐛", "c": "𝐜", "d": "𝐝", "e": "𝐞", "f": "𝐟", "g": "𝐠", "h": "𝐡", "i": "𝐢", "j": "𝐣", "k": "𝐤", "l": "𝐥", "m": "𝐦",
            "n": "𝐧", "o": "𝐨", "p": "𝐩", "q": "𝐪", "r": "𝐫", "s": "𝐬", "t": "𝐭", "u": "𝐮", "v": "𝐯", "w": "𝐰", "x": "𝐱", "y": "𝐲", "z": "𝐳",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9"
        }
    },

     {
        "id": 23,
        "name": "Circled Inverted",
        "category": "Unique/Attention",
        "unicodeType": "Negative Circled Unicode",
        "worksOn": ["Instagram", "WhatsApp"],
        "mapping": {
            "A": "🅐", "B": "🅑", "C": "🅒", "D": "🅓", "E": "🅔", "F": "🅕", "G": "🅖", "H": "🅗", "I": "🅘", "J": "🅙", "K": "🅚", "L": "🅛", "M": "🅜",
            "N": "🅝", "O": "🅞", "P": "🅟", "Q": "🅠", "R": "🅡", "S": "🅢", "T": "🅣", "U": "🅤", "V": "🅥", "W": "🅦", "X": "🅧", "Y": "🅨", "Z": "🅩",
            "a": "🅐", "b": "🅑", "c": "🅒", "d": "🅓", "e": "🅔", "f": "🅕", "g": "🅖", "h": "🅗", "i": "🅘", "j": "🅙", "k": "🅚", "l": "🅛", "m": "🅜",
            "n": "🅝", "o": "🅞", "p": "🅟", "q": "🅠", "r": "🅡", "s": "🅢", "t": "🅣", "u": "🅤", "v": "🅥", "w": "🅦", "x": "🅧", "y": "🅨", "z": "🅩",
            "0": "⓿", "1": "❶", "2": "❷", "3": "❸", "4": "❹", "5": "❺", "6": "❻", "7": "❼", "8": "❽", "9": "❾"
        }
    },
    {
        "id": 24,
        "name": "Parenthesized",
        "category": "Informal/Lists",
        "unicodeType": "Parenthesized Unicode",
        "worksOn": ["Instagram", "Twitter"],
        "mapping": {
            "a": "⒜", "b": "⒝", "c": "⒞", "d": "⒟", "e": "⒠", "f": "⒡", "g": "⒢", "h": "⒣", "i": "⒤", "j": "⒥", "k": "⒦", "l": "⒧", "m": "⒨",
            "n": "⒩", "o": "⒪", "p": "⒫", "q": "⒬", "r": "⒭", "s": "⒮", "t": "⒯", "u": "⒰", "v": "⒱", "w": "⒲", "x": "⒳", "y": "⒴", "z": "⒵",
            "0": "⓰", "1": "⓱", "2": "⓲", "3": "⓳", "4": "⓴"
            // Note: Limited numbers for Parenthesized
        }
    },
    {
        "id": 25,
        "name": "Dot Above",
        "category": "Scientific/Subtle",
        "unicodeType": "Combining Dot Above",
        "mapping": {},
        "specialProcessor": "dotAbove"
    },
    {
        "id": 26,
        "name": "Double Underline",
        "category": "Emphasis/Formal",
        "unicodeType": "Combining Double Underline",
        "mapping": {},
        "specialProcessor": "doubleUnderline"
    },
    {
        "id": 27,
        "name": "Diacritics: Acute Accent",
        "category": "Special Characters",
        "unicodeType": "Combining Acute Accent",
        "mapping": {},
        "specialProcessor": "acuteAccent"
    },
    {
        "id": 28,
        "name": "Mirror Text",
        "category": "Creative/Fun",
        "unicodeType": "Flipped Unicode",
        "worksOn": ["Instagram", "WhatsApp"],
        "mapping": {
            "a": "ɐ", "b": "q", "c": "ɔ", "d": "p", "e": "ǝ", "f": "ɟ", "g": "ƃ", "h": "ɥ", "i": "ı", "j": "ɾ", "k": "ʞ", "l": "l", "m": "ɯ",
            "n": "u", "o": "o", "p": "d", "q": "b", "r": "ɹ", "s": "s", "t": "ʇ", "u": "n", "v": "ʌ", "w": "ʍ", "x": "x", "y": "ʎ", "z": "z",
            "A": "∀", "B": "𐐒", "C": "Ɔ", "D": "◖", "E": "Ǝ", "F": "Ⅎ", "G": "⅁", "H": "H", "I": "I", "J": "ſ", "K": "Opts", "L": "˥", "M": "W",
            "N": "N", "O": "O", "P": "Ԁ", "Q": "Q", "R": "ᴚ", "S": "S", "T": "⊥", "U": "∩", "V": "Λ", "W": "M", "X": "X", "Y": "⅄", "Z": "Z",
            "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6"
        }
    },
    {
        "id": 29,
        "name": "Zalgo Glitch (Light)",
        "category": "Spooky/Mystery",
        "unicodeType": "Zalgo Text (Combining Diacritics)",
        "worksOn": ["Instagram", "Discord"],
        "mapping": {},
        "specialProcessor": "zalgoLight"
    },
    {
        "id": 30,
        "name": "Wavy Underline",
        "category": "Decorative",
        "unicodeType": "Combining Wavy Underline",
        "mapping": {},
        "specialProcessor": "wavyUnderline"
    }
];

// Global variable (scoped to this script, not truly global to window if using modules)
let currentName = "Ritesh"; // Default name

// Function to generate styled text using Unicode mappings
function generateStyledText(inputText, font) {
    let styledOutput = '';

    // Handle special processors first
    if (font.specialProcessor) {
        switch (font.specialProcessor) {
            case "underline":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u0332'; // Combining low line
                }
                return styledOutput;
            case "strikethrough":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u0336'; // Combining long stroke overlay
                }
                return styledOutput;
            case "dotAbove":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u0307'; // Combining dot above
                }
                return styledOutput;
            case "doubleUnderline":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u0333'; // Combining double low line
                }
                return styledOutput;
            case "acuteAccent":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u0301'; // Combining acute accent
                }
                return styledOutput;
            case "wavyUnderline":
                for (let i = 0; i < inputText.length; i++) {
                    styledOutput += inputText[i] + '\u033E'; // Combining wavy low line
                }
                return styledOutput;
            case "zalgoLight":
                // A light Zalgo effect
                const zalgoCharsTop = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u030A'];
                const zalgoCharsBottom = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320', '\u0321'];
                const getRandomZalgoChar = (arr) => arr[Math.floor(Math.random() * arr.length)];

                for (let i = 0; i < inputText.length; i++) {
                    let char = inputText[i];
                    char += getRandomZalgoChar(zalgoCharsTop);
                    char += getRandomZalgoChar(zalgoCharsBottom);
                    styledOutput += char;
                }
                return styledOutput;
            default:
                // If specialProcessor is defined but not recognized, fall through to mapping or original
                break;
        }
    }

    // Fallback to mapping if no specialProcessor or if specialProcessor didn't handle it
    if (font.mapping) {
        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            const mappedChar = font.mapping[char.toUpperCase()] || font.mapping[char.toLowerCase()];
            styledOutput += mappedChar || char; // Use mapped char, or original if not found
        }
        return styledOutput;
    }

    return inputText; // Return original if no mapping or special processor
}

// Update all font previews with current name
function updateFontPreviews() {
    const container = document.getElementById('fontContainer');

    if (!FONT_DATA || FONT_DATA.length === 0) {
        container.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                No stylish fonts data available.
            </div>
        `;
        return;
    }

    container.innerHTML = ''; // Clear loading message

    FONT_DATA.forEach((font, index) => {
        // Applying delay class for staggered animation, consistent with bio cards
        const delayClass = `delay-${index % 3}`;

        const styledText = generateStyledText(currentName, font);

        const platformTags = (font.worksOn || []).map(platform => {
            const iconMap = {
                'Instagram': 'instagram',
                'WhatsApp': 'whatsapp',
                'Facebook': 'facebook',
                'Twitter': 'twitter',
                'Discord': 'discord',
                'LinkedIn': 'linkedin',
                'Snapchat': 'snapchat',
                'Websites': 'globe'
            };
            const icon = iconMap[platform] || 'question-circle'; // Fallback icon
            return `
                <span class="platform-tag">
                    <i class="fab fa-${icon}"></i> ${platform}
                </span>
            `;
        }).join('');

        container.innerHTML += `
            <div class="font-card fade-in ${delayClass}">
                <div class="font-header">
                    <span class="font-name">${font.name}</span>
                    <button class="copy-btn" onclick="copyFont(this, '${escapeText(styledText)}', '${font.name}')">
                        <i class="far fa-copy"></i> Copy
                    </button>
                </div>
                <div class="font-preview">
                    ${styledText || '<span style="color:#999">Enter text above</span>'}
                </div>
                <div class="font-meta">
                    <div>
                        <div class="font-usage">Best for: ${font.category}</div>
                        <div class="font-unicode">Type: ${font.unicodeType}</div>
                    </div>
                    <div class="platform-compatibility">
                        ${platformTags}
                    </div>
                </div>
            </div>
        `;
    });

    // Trigger animations for newly added elements after they are appended to the DOM
    // This assumes `animateOnScroll` or a similar function is globally available in main.js
    const event = new Event('scroll');
    window.dispatchEvent(event);
}

// Helper function to escape text for HTML attributes (especially for onclick)
// Converts ' to ' and " to "
function escapeText(str) {
    if (typeof str !== 'string') {
        return '';
    }
    // Escape single quotes and double quotes for HTML attribute safety
    return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

// Helper function to decode HTML entities back to characters
function decodeHtmlEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
}

// Copy font text to clipboard
function copyFont(button, encodedText, fontName) {
    // Decode the text from HTML entities before copying to clipboard
    const textToCopy = decodeHtmlEntities(encodedText);

    if (!textToCopy || textToCopy.includes('Enter text above')) {
        showNotification('Please enter some text first', 'error');
        return;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = button.innerHTML;
        const originalBackground = button.style.background;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = 'var(--success-color)'; // Assuming --success-color is defined

        showNotification(`"${fontName}" style copied!`);

        setTimeout(() => {
            button.innerHTML = originalHtml; // Reset inner HTML
            button.style.background = originalBackground; // Reset background
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text for font:', fontName, 'Error:', err);
        showNotification('Failed to copy. Please try again.', 'error');
    });
}

// Show notification (specific to this page)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'error' ? 'error' : ''}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notification);

    // Use requestAnimationFrame for smoother animation start
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    setTimeout(() => {
        notification.classList.remove('show');
        // Give time for transition to complete before removing element
        setTimeout(() => {
            if (notification.parentNode) { // Check if it's still in DOM
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000); // Notification visible for 3 seconds
}

// Initialize page functionalities
document.addEventListener('DOMContentLoaded', function() {
    // Set initial name from input value
    currentName = document.getElementById('userName').value.trim();
    if (currentName === '') { // Ensure default text is set if input is empty
        currentName = document.getElementById('userName').placeholder; // Use placeholder as fallback
        document.getElementById('userName').value = currentName;
    }
    updateFontPreviews();

    // Setup update button event listener
    const updateButton = document.getElementById('updateBtn');
    if (updateButton) {
        updateButton.addEventListener('click', function() {
            currentName = document.getElementById('userName').value.trim();
            updateFontPreviews();
        });
    } else {
        console.warn("Update button with ID 'updateBtn' not found.");
    }

    // Allow Enter key to update preview in the input field
    const userNameInput = document.getElementById('userName');
    if (userNameInput) {
        userNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                currentName = this.value.trim();
                updateFontPreviews();
                this.blur(); // Optional: remove focus from input after Enter
            }
        });
    } else {
        console.warn("User name input with ID 'userName' not found.");
    }
});
