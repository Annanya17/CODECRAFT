

const problems = [
    { id: 1, name: "Greater Average", difficulty: "Easy", platform: "CodeChef", platformLogo: "codechef.png", companies: ["tcs.png", "cap.png", "cog.png"], status: "not_done_yet", note: "", icon: "➕" },
        
        
    
    
    { "id": 8, "name": "LRU Cache", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/lru-cache/", "platformLogo": "leetcode.png", "companies": ["tcs.png", "cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 9, "name": "Graph Cycle Detection", "difficulty": "Medium", "platform": "CodeChef", "link": "", "platformLogo": "codechef.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 10, "name": "Maximum Subarray", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/maximum-subarray/", "platformLogo": "leetcode.png", "companies": [ "cap.png","tcs.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 11, "name": "Minimum Spanning Tree", "difficulty": "Medium", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/", "platformLogo": "gfg.png", "companies": ["cap.png","tcs.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 12, "name": "Topological Sorting", "difficulty": "Medium", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/topological-sorting/", "platformLogo": "gfg.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 13, "name": "Rod Cutting Problem", "difficulty": "Medium", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/cutting-a-rod-dp-13/", "platformLogo": "gfg.png", "companies": ["google.png","tcs.png", "cap.png",], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 14, "name": "Binary Search", "difficulty": "Easy", "platform": "LeetCode", "link": "https://leetcode.com/problems/binary-search/", "platformLogo": "leetcode.png", "companies": ["google.png","tcs.png", "cap.png",], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 15, "name": "Trapping Rain Water", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/trapping-rain-water/", "platformLogo": "leetcode.png", "companies": ["cap.png","tcs.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 16, "name": "N-Queens", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/n-queens/", "platformLogo": "leetcode.png", "companies": ["cap.png","tcs.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 17, "name": "Longest Palindromic Substring", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/longest-palindromic-substring/", "platformLogo": "leetcode.png", "companies": ["cap.png","tcs.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 2, "name": "Two Sum", "difficulty": "Easy", "platform": "LeetCode", "link": "https://leetcode.com/problems/two-sum/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 3, "name": "Reverse a Linked List", "difficulty": "Easy", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/reverse-a-linked-list/", "platformLogo": "gfg.png", "companies": ["tcs.png", "cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 4, "name": "Valid Parentheses", "difficulty": "Easy", "platform": "LeetCode", "link": "https://leetcode.com/problems/valid-parentheses/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 5, "name": "Find the Duplicate Number", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/find-the-duplicate-number/", "platformLogo": "leetcode.png", "companies": ["tcs.png", "cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    { "id": 6, "name": "Subarray Sum Equals K", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/subarray-sum-equals-k/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
    
        { "id": 22, "name": "Spiral Matrix", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/spiral-matrix/", "platformLogo": "leetcode.png", "companies": ["google.png","tcs.png", "cap.png",], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 23, "name": "Rotate Image", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/rotate-image/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png","tcs.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 24, "name": "Pow(x, n)", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/powx-n/", "platformLogo": "leetcode.png", "companies": ["facebook.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 25, "name": "Find Peak Element", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/find-peak-element/", "platformLogo": "leetcode.png", "companies": ["amazon.png","google.png","tcs.png",], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 26, "name": "Letter Combinations of a Phone Number", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", "platformLogo": "leetcode.png", "companies": ["google.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 27, "name": "Clone Graph", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/clone-graph/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 28, "name": "Course Schedule", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/course-schedule/", "platformLogo": "leetcode.png", "companies": ["facebook.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 29, "name": "Graph Bipartite Check", "difficulty": "Medium", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/bipartite-graph/", "platformLogo": "gfg.png", "companies": ["amazon.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 30, "name": "Serialize and Deserialize Binary Tree", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", "platformLogo": "leetcode.png", "companies": ["google.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 31, "name": "Palindrome Partitioning", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/palindrome-partitioning/", "platformLogo": "leetcode.png", "companies": ["facebook.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 32, "name": "Alien Dictionary", "difficulty": "Hard", "platform": "GeeksforGeeks", "link": "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/", "platformLogo": "gfg.png", "companies": ["amazon.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 33, "name": "Word Ladder", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/word-ladder/", "platformLogo": "leetcode.png", "companies": ["google.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 34, "name": "Find Median from Data Stream", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/find-median-from-data-stream/", "platformLogo": "leetcode.png", "companies": ["amazon.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 35, "name": "Graph Valid Tree", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/graph-valid-tree/", "platformLogo": "leetcode.png", "companies": ["facebook.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 36, "name": "Flatten Nested List Iterator", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/flatten-nested-list-iterator/", "platformLogo": "leetcode.png", "companies": ["microsoft.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 37, "name": "Maximal Rectangle", "difficulty": "Hard", "platform": "LeetCode", "link": "https://leetcode.com/problems/maximal-rectangle/", "platformLogo": "leetcode.png", "companies": ["google.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" },
        { "id": 38, "name": "Meeting Rooms II", "difficulty": "Medium", "platform": "LeetCode", "link": "https://leetcode.com/problems/meeting-rooms-ii/", "platformLogo": "leetcode.png", "companies": ["facebook.png","cap.png", "cog.png"], "status": "not_done_yet", "note": "", "icon": "➕" }
    
    
    
    
    
    ];
    
    let currentProblemId = null;
    
    function loadProblems() {
        const list = document.getElementById("problems-list");
        list.innerHTML = "";
        problems.forEach(problem => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${problem.name}</td>
                <td>
                    <select onchange="updateStatus(${problem.id}, this.value)">
                        <option value="not_done_yet" ${problem.status === "not_done_yet" ? "selected" : ""}>Not Done Yet</option>
                        <option value="completed" ${problem.status === "completed" ? "selected" : ""}>Completed</option>
                        <option value="revision" ${problem.status === "revision" ? "selected" : ""}>Revision</option>
                    </select>
                </td>
                <td>${problem.difficulty}</td>
                <td>
                    <a href="https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/AVGPROBLEM" target="_blank">
                        <img src="${problem.platformLogo}" alt="${problem.platform}" style="width: 32px; height: 32px;">
                    </a>
                </td>
                <td>
                    <div class="avatar-group">
                        ${problem.companies.map(company => `<img src="${company}" class="avatar-img" style="width: 24px; height: 24px;">`).join(" ")}
                    </div>
                </td>
                <td>
                    <span class="icon" onclick="openModal(${problem.id})">${problem.icon}</span>
                </td>
            `;
            list.appendChild(row);
        });
    }
    let selectedProblemId = null;
    
    function showNotePopup(id) {
        selectedProblemId = id;
        const problem = problems.find(p => p.id === id);
        document.getElementById("noteInput").value = problem.note || "";
        document.getElementById("noteModal").style.display = "flex";
    }
    
    function hideNotePopup() {
        document.getElementById("noteModal").style.display = "none";
    }
    
    function updateNote() {
        if (selectedProblemId !== null) {
            const problem = problems.find(p => p.id === selectedProblemId);
            problem.note = document.getElementById("noteInput").value;
            problem.icon = "✏️"; // Change icon after adding a note
            loadProblems(); // Refresh table
        }
        hideNotePopup();
    }
    
    loadProblems();
    